<template>
  <div class="loading" v-if="isLoading" @click="onLoading">
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
    <div class="loading-dot"></div>
  </div>
</template>
<script setup>
import useMainStore from '@/store/modules/main.js'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const { isLoading } = storeToRefs(mainStore)
const onLoading = () => {
  mainStore.isLoading = false
}
</script>
<style lang="less" type="scoped">
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 99;
}
.loading-dot {
  width: 20px;
  height: 20px;
  background: #8385aa;
  border-radius: 50%;
  margin: 250px 10px;
  animation: bouncing-animate 0.6s infinite alternate;
}
.loading-dot:nth-child(2) {
  animation-delay: 0.2s;
}
.loading-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes bouncing-animate {
  to {
    opacity: 0.1;
    transform: translate3d(0, -50px, 0);
  }
}
</style>
