import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'

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
      component: () => import('@/views/About/index.vue')
    }
  ]
})

export default router
