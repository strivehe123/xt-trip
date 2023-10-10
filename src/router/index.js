import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/index.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/index.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/index.vue')
    },
    {
      path: '/city',
      meta: {
        hiddenTabbar: true
      },
      component: () => import('@/views/city/index.vue')
    },
    {
      path: '/search',
      meta: {
        hiddenTabbar: true
      },
      component: () => import('@/views/search/index.vue')
    },
    {
      path: '/detail/:id',
      meat: {
        hiddenTabbar: true
      },
      component: () => import('@/views/detail/index.vue')
    }
  ]
})

export default router
