<template>
  <div class="app">
    <router-view />
    <tabbar v-if="!route.meta.hiddenTabbar" />
    <loading />
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import tabbar from '@/components/tabbar/index.vue'
import loading from '@/components/loading/index.vue'
const route = useRoute()
</script>
<style type="scoped">
.app {
}
</style>
