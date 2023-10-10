<template>
  <div class="home-category section">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <span class="title">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import useHomeStore from '@/store/modules/home'
const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>
<style lang="less" scoped>
.home-category {
  display: flex;
  margin-top: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 38px;
    }
  }
}
</style>
