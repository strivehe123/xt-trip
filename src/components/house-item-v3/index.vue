<template>
  <div class="house-item-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image?.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <van-icon name="location-o" />
          <span>{{ itemData.location }}</span>
        </div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>

        <div class="price">
          <div class="new">¥{{ itemData.finalPrice }}</div>
          <div class="old">¥{{ itemData.productPrice }}</div>
          <div class="tip">{{ itemData?.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.house-item-v3 {
  width: 50%;
  .item-inner {
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
      .location {
        padding: 0;

        display: flex;
        align-items: center;
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
        // justify-content: space-between;
        align-items: center;
        align-items: center;
        .new {
          color: orange;
        }
        .old {
          color: #999;
          font-size: 12px;
          margin: 0 3px 3px 0;
          text-align: center;
          text-decoration: line-through;
        }
        .tip {
          background: red;
          height: 14px;
          line-height: 14px;
          border-radius: 4px;
          padding: 2px 4px;
          font-size: 12px;

          color: #fff;
        }
      }
    }
  }
}
</style>
