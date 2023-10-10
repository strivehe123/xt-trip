import { defineStore } from 'pinia'
import { getDetailInfo } from '@/service'
const useDetailStore = defineStore('detail', {
  state: () => ({
    detailInfo: {},
    houseId: null
  }),
  actions: {
    async fetchDetailInfoData() {
      const res = await getDetailInfo(this.houseId)
      this.detailInfo = res.data
    }
  }
})
export default useDetailStore
