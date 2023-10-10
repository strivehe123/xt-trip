<template>
  <div class="house-item-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <van-icon name="location-o" />
          <span>{{ itemData.location }}</span>
        </div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate :model-value="itemScore" color="#fff" ready-only allow-half :size="14" />
          <div class="new">¥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
const itemScore = computed(() => Number(props.itemData.commentScore))
</script>
<style lang="less" scoped>
.house-item-v9 {
  box-sizing: border-box;
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
      .location {
        display: flex;
        align-items: center;
        padding: 0;
        font-size: 12px;
        display: flex;
        height: 22px;
      }
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
