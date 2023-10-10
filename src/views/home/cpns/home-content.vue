<template>
  <div class="home-content section">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :Key="item.data.houseId">
        <house-item-v3
          v-if="item.discoveryContentType === 3"
          :item-data="item.data"
          @click="onItemClick(item.data)"
        />
        <house-item-v9
          v-else-if="item.discoveryContentType === 9"
          :item-data="item.data"
          @click="onItemClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import useHomeStore from '@/store/modules/home'
import useDetailStore from '@/store/modules/detail'
import HouseItemV3 from '@/components/house-item-v3/index.vue'
import HouseItemV9 from '@/components//house-item-v9/index.vue'

const router = useRouter()
const homeStore = useHomeStore()
const detailStore = useDetailStore()
const { houseList } = storeToRefs(homeStore)
const onItemClick = (item) => {
  detailStore.houseId = item.houseId
  router.push(`/detail/${item.houseId}`)
}
</script>
<style lang="less" scoped>
.home-content {
  margin-top: 10px;
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
