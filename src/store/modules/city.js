import { defineStore } from 'pinia'
import { getAllCity } from '@/service'
const useCityStore = defineStore('city', {
  state: () => ({
    allCities: [],
    currentCity: { cityName: '北京' }
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getAllCity()
      this.allCities = res.data
    }
  }
})
export default useCityStore
