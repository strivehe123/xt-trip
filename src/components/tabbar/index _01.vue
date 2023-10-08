<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData">
      <div
        class="tab-item"
        :class="{ active: index === currentIndex }"
        @click="handleClick(item, index)"
      >
        <img :src="getAssetURL(item.imageActive)" alt="" v-if="index === currentIndex" />
        <img :src="getAssetURL(item.image)" alt="" v-else />

        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import tabbarData from '@/assets/data/tabbar.js'
import getAssetURL from '@/utils/get_url.js'
const currentIndex = ref(0)
const router = useRouter()
const handleClick = (item, index) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>
<style lang="less" type="scoped">
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  border-top: 1px solid #f3f3f3;
  .tab-item {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #bfbfbf;
    flex: 1;
    &.active {
      .text {
        color: #d81e06;
      }
    }
    img {
      width: 30px;
    }
  }
}
</style>
