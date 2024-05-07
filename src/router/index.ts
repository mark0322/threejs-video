import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Earth/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      component: () => import('@/views/Rock/index.vue')
    },
    {
      path: '/test',
      component: () => import('@/views/Test/index.vue')
    }
  ]
})

export default router
