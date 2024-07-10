import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodPotPage from '../views/FoodPotPage.vue'
import testpage from '../views/Test.vue'
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
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/food-pot',
      name: 'FoodPotPage',
      component: () => import('../views/FoodPotPage.vue')
    },
    {
      path: '/Test',
      name: 'testPage',
      component: () => import('../views/Test.vue')
    }
  ]
})

export default router
