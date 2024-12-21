import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/AddPostPage.vue'),
    }
  ],
})

export default router
