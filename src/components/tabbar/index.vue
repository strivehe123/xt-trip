<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex" route active-color="#ff9854">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/favor">收藏</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/order">订单</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="/message">消息</van-tabbar-item>
    </van-tabbar>
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
<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  border-top: 1px solid #f3f3f3;
  /* 方式一  修改vant样式 */
  /* --van-tabbar-item-icon-size: 22px;
   */
  /* 方式二 修改vant样式 */
  :deep(.van-tabbar-item__icon) {
    font-size: 22px;
  }
}
</style>
