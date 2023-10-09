<template>
  <div class="app">
    <router-view />
    <tabbar v-if="!route.meta.hiddenTabbar" />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import tabbar from '@/components/tabbar/index.vue'
const route = useRoute()
</script>
<style type="scoped">
.app {
}
</style>
