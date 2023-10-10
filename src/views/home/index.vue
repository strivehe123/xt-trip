<template>
  <div class="home" ref="homeRef">
    <home-tab-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner01.jpeg" alt="" />
    </div>
    <!-- 搜索模块 -->
    <home-search :hot-suggests="hotSuggests" />
    <!-- 分类模块 -->
    <home-category />
    <!-- 内容模块 -->
    <home-content />
    <!-- 滚动到一定区域 显示的搜索框 -->
    <div class="search-box" v-show="isShowSearch">
      <search-bar />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import HomeTabBar from './cpns/home-tab-bar.vue'
import HomeSearch from './cpns/home-search.vue'
import HomeCategory from './cpns/home-category.vue'
import HomeContent from './cpns/home-content.vue'
import useHomeStore from '@/store/modules/home'
import SearchBar from '@/components/search-bar/index.vue'
import { storeToRefs } from 'pinia'
import { useScroll } from '@/hooks/useScroll'

const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
homeStore.fetchHotSuggestsData()
homeStore.fetchHomeCategoriesData()
homeStore.fetchHouseListData()
// 处理滚动
const homeRef = ref()
const { isBottom, scrollTop } = useScroll(homeRef)
const isShowSearch = computed(() => {
  if (scrollTop.value > 360) {
    return true
  } else {
    return false
  }
})
watch(isBottom, (newValue) => {
  homeStore.fetchHouseListData(() => {
    isBottom.value = false
  })
})
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
    }
    margin-bottom: 10px;
  }
  .search-box {
    padding: 10px 16px 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #fff;
    z-index: 9;
  }
}
</style>
