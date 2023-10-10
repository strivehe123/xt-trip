<template>
  <div>
    <div class="home-search section border-bottom">
      <div class="location">
        <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
        <div class="position">
          <div class="text">我的位置</div>
          <van-icon name="location-o" color="#ff9854" />
        </div>
      </div>
    </div>
    <div class="date-range section border-bottom" @click="show = true">
      <div class="start">
        <span class="text">入住</span>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="stay">
        <span>共{{ stayDay }}晚</span>
      </div>
      <div class="end">
        <span class="text">离开</span>
        <div class="date">{{ endtDateStr }}</div>
      </div>
    </div>
    <!-- 热搜列表 -->
    <div class="hot-suggest section">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn" @click="onSearch">开始搜索</div>
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
      color="#ff9854"
      :show-confirm="false"
    />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { formatMonDay, getDiffDay } from '@/utils/format_date.js'
import useMainStore from '@/store/modules/main'
import { useRouter } from 'vue-router'
import useCityStore from '@/store/modules/city'

defineProps({
  hotSuggests: {
    type: Array,
    default: () => []
  }
})

const router = useRouter()
const cityClick = () => {
  router.push('/city')
}
// 显示城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
// 处理日历
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonDay(startDate.value))
const endtDateStr = computed(() => formatMonDay(endDate.value))
const stayDay = computed(() => getDiffDay(startDate.value, endDate.value))
const show = ref(false)
// 日期选择
const onConfirm = (value) => {
  show.value = false
  mainStore.startDate = value[0]
  mainStore.endDate = value[1]
}
// 搜索按钮
const onSearch = () => {
  router.push('/search')
}
</script>
<style lang="less" scoped>
.location {
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  .city {
    color: #333;
    flex: 1;
  }
  .position {
    display: flex;
    align-items: center;
    width: 100px;
    box-sizing: border-box;
    .text {
      color: #666;
      margin-right: 5px;
    }
  }
}
.date-range {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  align-items: center;
  .start,
  .end {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text {
      color: #999;
      text-align: center;
    }
  }
}
.hot-suggest {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 3px;
    padding: 4px 8px;
    border-radius: 14px;
    font-size: 12px;
  }
}
.search-btn {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .btn {
    width: 324px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
