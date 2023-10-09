<template>
  <div class="city-content">
    <van-index-bar :index-list="indexList" highlight-color="#ff9854">
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="(hot_item, hot_index) in cityGroup.hotCities" :key="hot_index">
          <div class="city" @click="handleCityClick(hot_item)">{{ hot_item.cityName }}</div>
        </template>
      </div>
      <template v-for="(item, index) in cityGroup.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, city_index) in item.cities" :key="city_index">
          <van-cell :title="city.cityName" @click="handleCityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/store/modules/city'
const props = defineProps({
  cityGroup: {
    type: Object,
    default: () => ({})
  }
})
const indexList = computed(() => {
  const _ = props.cityGroup.cities.map((item) => item.group)
  _.unshift('#')

  return _
})
// 选中城市
const cityStore = useCityStore()
const router = useRouter()
const handleCityClick = (city) => {
  cityStore.currentCity = city
  router.back()
}
</script>
<style lang="less" scoped>
.city-content {
  .hot {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    padding-right: 20px;
    .city {
      height: 28px;
      width: 70px;
      line-height: 28px;
      text-align: center;
      font: 14px;
      border-radius: 14px;
      background-color: #fff4ec;
      margin: 10px 0;
    }
  }
}
</style>
