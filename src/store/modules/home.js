import { defineStore } from 'pinia'
import { getHotSuggests, getHomeCategories, getHouseList } from '@/service'
const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchHomeCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHouseList(this.currentPage)
      if (res.data) {
        this.houseList.push(...res.data)
        this.currentPage++
      }
    }
  }
})
export default useHomeStore
