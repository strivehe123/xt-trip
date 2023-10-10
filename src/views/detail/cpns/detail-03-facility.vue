<template>
  <div class="detail-facility">
    <detail-section header-text="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacility?.houseFacilitys" :key="index">
          <div class="item" v-if="houseFacility?.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="" />
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(iten, indey) in item.facilitys.slice(0, 4)" :key="indey">
                <div class="iten">
                  <van-icon name="passed" color="#ff9854" />
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>
<script setup>
import DetailSection from '@/components/detail-section/index.vue'
defineProps({
  houseFacility: {
    type: Object,
    default: () => ({})
  }
})
</script>
<style lang="less" scoped>
.detail-facility {
  .facility-inner {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;
    .item {
      margin: 25px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .head {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 80px;
        margin-right: 40px;
        img {
          width: 40px;
        }
        .text {
          // text-align: center;
        }
      }
      .list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .iten {
          width: 50%;
        }
      }
    }
  }
}
</style>
