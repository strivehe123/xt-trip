<template>
  <div class="notice">
    <detail-section header-text="预定须知">
      <div class="notice-inner">
        <template v-for="(item, index) in rule" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>
<script setup>
import DetailSection from '@/components/detail-section/index.vue'
defineProps({
  rule: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="less" scoped>
.notice {
  .notice-inner {
    font-size: 16px;
    .item {
      margin: 10px 0;
    }
  }
}
</style>
