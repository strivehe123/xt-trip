<template>
  <div class="app">
    <router-view />
    <tabbar />
  </div>
</template>
<script setup>
import tabbar from '@/components/tabbar/index.vue'
</script>
<style type="scoped">
.app {
}
</style>
