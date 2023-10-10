<template>
  <div class="detail-swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swiperGroup" :key="key">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getName(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key"
                >{{ getIndex(swipeData[active]) }} / {{ value.length }}</span
              >
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})
const swiperGroup = computed(() => {
  let swiperGroup_ = {}
  for (const item of props.swipeData) {
    let _ = swiperGroup_[item.enumPictureCategory]
    if (!_) {
      _ = []
      swiperGroup_[item.enumPictureCategory] = _
    }
    _.push(item)
  }

  return swiperGroup_
})

const getName = (name) => {
  const nameReg = /【(.*?)】/i
  const result = nameReg.exec(name)

  return result[1]
}
const getIndex = (item) => {
  const index = swiperGroup.value[item.enumPictureCategory].findIndex((data) => data === item)
  return index + 1
}
</script>
<style lang="less" scoped>
.my-swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
  .indicator {
    position: absolute;
    padding: 2px 5px;
    right: 5px;
    bottom: 5px;
    font: 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
    .item {
      margin: 0 3px;
      &.active {
        background: #fff;
        color: #333;
        padding: 0 3px;
        border-radius: 3px;
      }
    }
  }
}
</style>
