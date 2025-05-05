import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Frist/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rock',
      component: () => import('@/views/Rock/index.vue')
    },
    {
      path: '/earth',
      component: () => import('@/views/Earth/index.vue')
    }
  ]
})

export default router
