<template>
  <div class="search-bar">
    <!-- 日期 -->
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <!-- 放大镜图标 -->
    <div class="right">
      <van-icon name="search" size="24" />
    </div>
  </div>
</template>
<script setup>
import useMainStore from '@/store/modules/main.js'
import { formatMonDay } from '@/utils/format_date'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonDay(startDate.value, 'MM.DD'))
const endDateStr = computed(() => formatMonDay(endDate.value, 'MM.DD'))
</script>
<style lang="less" scoped>
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f4f6;
  border-radius: 6px;

  font-size: 14px;
  height: 45px;

  .content {
    .keyword {
      font-size: 12px;
    }
  }
}
.start,
.end {
  display: flex;
}
</style>
