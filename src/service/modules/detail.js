import xhrequest from '@/service/request'
export function getDetailInfo(houseId) {
  return xhrequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
