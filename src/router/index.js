import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '../views/HomePage.vue'
// import AboutPage from '../views/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'), 
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/views/SupportPage.vue'),
    }
  ],
})

export default router
