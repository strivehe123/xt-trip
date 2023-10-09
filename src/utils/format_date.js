import dayjs from 'dayjs'
export function formatMonDay(date, fmtStr = 'MM月DD日') {
  return dayjs(date).format(fmtStr)
}
export function getDiffDay(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'day')
}
