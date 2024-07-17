import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodPotPage from '../views/FoodPotPage.vue'
import testpage from '../views/Test.vue'
import Cooking from '../views/Cooking.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'FoodPotPage',
      component: () => import('../views/FoodPotPage.vue')
    },
    {
      path:'/cooking',
      name:'Cooking',
      component: () => import('../views/Cooking.vue')
    },
    {
      path: '/Test',
      name: 'testPage',
      component: () => import('../views/Test.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../components/Search.vue')
    },
    {
      path:'/chat',
      name:'Chat',
      component: () => import('../views/ChatRecipe.vue')
    },
    {
      path:'/menu:id',
      name:'Menu',
      component: () => import('../views/Menu.vue')
    },
  ]
})

export default router
