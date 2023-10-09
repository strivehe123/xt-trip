import xtrequest from '../request'

export function getAllCity() {
  return xtrequest.get({
    url: '/city/all'
  })
}
