<template>
  <div class="detail-comment">
    <detail-section header-text="热门评论" :more-text="`查看全部${comment.totalCount}条评论`">
      <div class="comment">
        <div class="header">
          <div class="left">
            <div class="score">
              <div class="rate">{{ comment.overall }}</div>
            </div>
            <div class="desc">
              <div class="up">{{ comment.scoreTitle }}</div>
              <div class="count">{{ comment.totalCount }}条评论</div>
              <van-rate
                v-model="comment.overall"
                :size="20"
                color="#ff9854"
                void-icon="star"
                void-color="#eee"
              />
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in comment.subScoresFocus" :key="index">
              <div class="item">{{ item.text }}</div>
            </template>
          </div>
        </div>
        <div class="content">
          <div class="hot">
            <template v-for="(item, index) in comment.commentTagVo" :key="index">
              <div class="item">{{ item.text }}</div>
            </template>
          </div>
          <div class="desc">
            <div class="desc-top">
              <img :src="comment.comment?.userAvatars" alt="" />
              <div class="name">
                <span>{{ comment.comment?.userName }}</span>
                <span>{{ comment.comment?.checkInDate }}</span>
              </div>
            </div>
            <div class="desc-content">
              {{ comment.comment?.commentDetail }}
            </div>
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>
<script setup>
import DetailSection from '@/components/detail-section/index.vue'
defineProps({
  comment: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.detail-comment {
  .comment {
    .header {
      display: flex;
      .left {
        width: 50%;
        display: flex;
        .score {
          margin-right: 8px;
          font-size: 70px;
          font-weight: 700;
          height: 100px;
          line-height: 100px;

          overflow: hidden;
          display: flex;
          .rate {
            border-bottom: 5px solid var(--primary-color);
          }
        }
        .desc {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .count {
            color: #666;
            margin: 8px 0;
          }
        }
      }
      .right {
        box-sizing: border-box;
        padding: 4px;
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 50%;
        }
      }
    }
    .content {
      margin-top: 15px;
      .hot {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .item {
          font-size: 14px;
          padding: 2px 3px;
          background-color: #eee;
          margin-right: 10px;
          margin-bottom: 10px;
        }
      }
      .desc {
        padding: 8px 12px;
        border-radius: 10px;
        background-color: #f7f9fb;
        .desc-top {
          display: flex;
          align-items: center;
          img {
            width: 40px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .desc-content {
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
