import { defineStore } from 'pinia'
const _start = new Date()
const _end = new Date()
_end.setDate(_end.getDate() + 1)
const useMainStore = defineStore('main', {
  state: () => ({
    token: '',
    startDate: _start,
    endDate: _end,
    isLoading: false
  })
})
export default useMainStore
