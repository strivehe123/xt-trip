<template>
  <div class="landloard">
    <detail-section header-text="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord.topScroll" alt="" />
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="" />
            </div>
            <div class="info">
              <div class="name">{{ landlord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags" :key="index">
                  <div class="item" :style="{ color: item.tagText?.color }">
                    <span>{{ item.tagText?.text }}</span>
                    <span v-if="index !== landlord?.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
              <div class="right">联系房东</div>
            </div>
          </div>
        </div>
        <div class="content">
          <template v-for="(item, index) in landlord.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>
<script setup>
import DetailSection from '@/components/detail-section/index.vue'
defineProps({
  landlord: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.intro {
  .top {
    img {
      width: 100%;
      border-radius: 3px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .left {
      display: flex;
      width: 100%;
      .avatar {
        img {
          width: 54px;
          height: 54px;
        }
      }
      .info {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tags {
          display: flex;
        }
        .right {
          padding: 3px 8px;
          color: #fff;
          border-radius: 3px;
          background-color: var(--primary-color);
        }
      }
    }
  }
  .content {
    margin: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    .item {
      .title {
        color: #999;
      }
      .introduction {
        font-weight: 700;
        font-size: 18px;
        margin: 10px 0;
      }
    }
  }
}
</style>
