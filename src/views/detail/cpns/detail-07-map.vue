<template>
  <div class="detail-map">
    <detail-section header-text="周边位置" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </detail-section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import DetailSection from '@/components/detail-section/index.vue'
const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})
// ref map
const mapRef = ref('')
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value) // 创建地图实例
  const point = new BMapGL.Point(props.position.longitude, props.position.latitude) // 创建点坐标
  map.centerAndZoom(point, 15)
  const marker1 = new BMapGL.Marker(point)
  map.addOverlay(marker1)
})
</script>
<style lang="less" scoped>
.baidu {
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin: 0;
}
</style>
