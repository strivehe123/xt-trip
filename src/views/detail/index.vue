<template>
  <!-- nav bar -->
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
  </div>
  <!--01  swiper -->
  <detail-swiper :swipe-data="detailInfo?.mainPart?.topModule?.housePicture?.housePics" />
  <!--02 topinfo -->
  <detail-top-info :top-info="detailInfo?.mainPart?.topModule" />
  <!-- 03 facility -->
  <detail-facility
    :house-facility="detailInfo?.mainPart?.dynamicModule?.facilityModule?.houseFacility"
  />
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useDetailStore from '@/store/modules/detail'
import { storeToRefs } from 'pinia'
import DetailSwiper from './cpns/detail-01-swiper.vue'
import DetailTopInfo from './cpns/detail-02-topinfo.vue'
import DetailFacility from './cpns/detail-03-facility.vue'
const router = useRouter()
const route = useRoute()
onMounted(() => {
  detailStore.houseId = route.params.id
  detailStore.fetchDetailInfoData()
})
// 发送获取详情数据的请求
const detailStore = useDetailStore()

const { detailInfo } = storeToRefs(detailStore)
// 处理返回上一级路由
const onClickLeft = () => {
  router.back()
}
</script>
<style lang="less" scoped></style>
