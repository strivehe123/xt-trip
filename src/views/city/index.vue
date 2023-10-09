<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        show-action
        shape="round"
        @cancel="onCancel"
      />
      <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(value, key, index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities" :key="index">
        <city-content v-show="key === active" :cityGroup="value" />
      </template>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCityStore from '@/store/modules/city'
import CityContent from './cpns/city-content.vue'
// 搜索框的内容和返回上一个页面
const router = useRouter()
const searchValue = ref('')
const onCancel = () => {
  router.go(-1)
}
//tab标签的切换  获取tab标签的内容
const cityStore = useCityStore()
cityStore.fetchAllCityData()
const { allCities } = storeToRefs(cityStore)
const active = ref()
const cityContent = computed(() => allCities.value[active.value])
</script>
<style lang="less" scoped>
.city {
  .content {
    height: calc(100vh - 100px);
    overflow-y: auto;
  }
}
</style>
