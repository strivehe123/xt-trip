import xtrequest from '@/service/request'

export function getHotSuggests() {
  return xtrequest.get({ url: '/home/hotSuggests' })
}
