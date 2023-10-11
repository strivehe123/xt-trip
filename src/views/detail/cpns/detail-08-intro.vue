<template>
  <div class="detail-intro">
    <detail-section header-text="价格说明">
      <div class="intro-inner">
        {{ intro.introduction }}
      </div>
    </detail-section>
  </div>
</template>
<script setup>
import DetailSection from '@/components/detail-section/index.vue'
defineProps({
  intro: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.intro-inner {
  padding: 12px;
  letter-spacing: 1px;
  font-size: 18px;
  text-indent: 2em;
}
</style>
