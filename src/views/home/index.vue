<template>
  <div class="home">
    <home-tab-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner01.jpeg" alt="" />
    </div>
    <home-search :hot-suggests="hotSuggests" />
    <!-- date range -->
  </div>
</template>
<script setup>
import HomeTabBar from './cpns/home-tab-bar.vue'
import HomeSearch from './cpns/home-search.vue'
import useHomeStore from '@/store/modules/home'
import { storeToRefs } from 'pinia'
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
homeStore.fetchHotSuggestsData()
</script>
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
    margin-bottom: 10px;
  }
}
</style>
