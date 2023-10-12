<template>
  <div class="detail" ref="detailRef">
    <div class="detail-inner">
      <!-- nav bar -->
      <div class="detail-nav-bar">
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
      </div>
      <!--01  swiper -->
      <detail-swiper :swipe-data="detailInfo?.mainPart?.topModule?.housePicture?.housePics" />
      <!--02 topinfo -->
      <detail-top-info
        :top-info="detailInfo?.mainPart?.topModule"
        :ref="getSectionRef"
        title="描述"
      />
      <!-- 03 facility -->
      <detail-facility
        :house-facility="detailInfo?.mainPart?.dynamicModule?.facilityModule?.houseFacility"
        :ref="getSectionRef"
        title="设施"
      />
      <!-- 04 landloard -->
      <detail-landloard
        :landlord="detailInfo.mainPart?.dynamicModule?.landlordModule"
        :ref="getSectionRef"
        title="房东"
      />
      <!-- 05 comment -->
      <detail-comment
        :comment="detailInfo.mainPart?.dynamicModule?.commentModule"
        :ref="getSectionRef"
        title="评论"
      />
      <!-- 06 notice -->
      <detail-notice
        :rule="detailInfo.mainPart?.dynamicModule?.rulesModule?.orderRules"
        :ref="getSectionRef"
        title="注意"
      />
      <!-- 07 map -->
      <detail-map
        :position="detailInfo.mainPart?.dynamicModule?.positionModule"
        :ref="getSectionRef"
        title="地图"
      />
      <!-- 08 intro -->
      <detail-intro :intro="detailInfo.mainPart?.introductionModule" :ref="getSectionRef" />
      <div class="footer">
        <div class="text">訫同旅行，永无止境~</div>
      </div>
      <div class="top" v-if="isShowTab">
        <van-tabs v-model:active="tabActive" title-active-color="#ff9854" @click-tab="onClickTab">
          <template v-for="(item, index) in tabs" :key="index">
            <van-tab :title="item"></van-tab>
          </template>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useDetailStore from '@/store/modules/detail'
import { storeToRefs } from 'pinia'
import DetailSwiper from './cpns/detail-01-swiper.vue'
import DetailTopInfo from './cpns/detail-02-topinfo.vue'
import DetailFacility from './cpns/detail-03-facility.vue'
import DetailLandloard from './cpns/detail-04-landloard.vue'
import DetailComment from './cpns/detail-05-comment.vue'
import DetailNotice from './cpns/detail-06-notice.vue'
import DetailMap from './cpns/detail-07-map.vue'
import DetailIntro from './cpns/detail-08-intro.vue'
import { useScroll } from '@/hooks/useScroll'
const router = useRouter()
const route = useRoute()
// 获取detail houseId 发起请求获取数据
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
// 处理页面滚动
const tabActive = ref(2)
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const isShowTab = computed(() => {
  return scrollTop.value > 100
})
// 点击切换标签
let isClick = false
let currentDistance = -1
const onClickTab = (item) => {
  const currentRef = sectionEls.value[item.title]
  isClick = true
  currentDistance = currentRef.offsetTop - 44
  detailRef.value.scrollTo({
    top: currentRef.offsetTop - 44,
    behavior: 'smooth'
  })
}
// 方法 绑定ref
const sectionEls = ref({})
const getSectionRef = (item) => {
  if (!item) return
  const title = item.$el.getAttribute('title')
  if (title) sectionEls.value[title] = item.$el
}
// 获取tab 标签的  标题
const tabs = computed(() => Object.keys(sectionEls.value))
//监听scroll 滚动 tab 改变激活状态
watch(scrollTop, (newValue) => {
  if (currentDistance === newValue) isClick = false
  if (isClick) return
  const els = Object.values(sectionEls.value)
  const values = els.map((item) => item.offsetTop)
  let index = values.length - 1

  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 80) {
      index = i - 1
      break
    }
  }
  tabActive.value = index
})
</script>
<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;
}
.footer {
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .text {
    font-size: 12px;
    color: #7688a7;
  }
}
.top {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #fff;
}
</style>
