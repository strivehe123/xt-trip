import { throttle } from 'underscore'
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'
export function useScroll(elRef) {
  const isBottom = ref(false)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)
  const onScroll = throttle(() => {
    if (elRef === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollHeight.value = document.documentElement.scrollHeight
      scrollTop.value = document.documentElement.scrollTop
    } else {
      clientHeight.value = elRef.value.clientHeight
      scrollHeight.value = elRef.value.scrollHeight
      scrollTop.value = elRef.value.scrollTop
    }

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isBottom.value = true
    }
  }, 100)
  onMounted(() => {
    if (elRef.value) {
      elRef.value.addEventListener('scroll', onScroll)
    }
  })
  onUnmounted(() => {
    if (elRef.value) {
      elRef.value.removeEventListener('scroll', onScroll)
    }
  })
  onActivated(() => {
    if (elRef.value) {
      elRef.value.addEventListener('scroll', onScroll)
    }
  })
  onDeactivated(() => {
    if (elRef.value) {
      elRef.value.removeEventListener('scroll', onScroll)
    }
  })
  return { isBottom, scrollHeight, scrollTop, clientHeight }
}
