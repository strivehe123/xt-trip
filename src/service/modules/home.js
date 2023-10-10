import xtrequest from '@/service/request'

// 获取热门搜索数据
export function getHotSuggests() {
  return xtrequest.get({ url: '/home/hotSuggests' })
}
// 获取分类数据
export function getHomeCategories() {
  return xtrequest.get({ url: '/home/categories' })
}
// 获取房屋内容数据
export function getHouseList(page) {
  return xtrequest.get({ url: '/home/houselist', params: { page } })
}
