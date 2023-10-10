<template>
  <div class="top-info">
    <div class="name">{{ topInfo.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in topInfo?.houseTags" :key="item.tagCode">
        <span
          class="item"
          v-if="item.tagText"
          :style="{ color: item.tagText?.color, background: item.tagText?.background?.color }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="rate">{{ topInfo.commentBrief?.overall }}</span>
        <span class="title">{{ topInfo.commentBrief?.scoreTitle }}</span>
        <span class="brief">{{ topInfo.commentBrief?.commentBrief }}</span>
      </div>
      <div class="right">
        <span class="count">{{ topInfo.commentBrief?.totalCount }}条评论></span>
      </div>
    </div>
    <div class="location extra">
      <span class="area">{{ topInfo.nearByPosition?.address }}</span>
      <span class="right">地图·周边></span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  topInfo: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.top-info {
  padding: 16px;
  background-color: #fff;
  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .tags {
    margin: 10px 0;
    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }
  .comment {
    .rate {
      font-weight: 700;
      font-size: 16px;
      color: #333;
    }
  }
  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;
    .right {
      color: var(--primary-color);
    }
  }
  .location {
    .area {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
