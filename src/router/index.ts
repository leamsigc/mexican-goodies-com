import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import defaultLayout from '@/layout/defaultLayout.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CountdownVue from '@/pages/Countdown.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: defaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        // redirect: 'countdown',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: CountdownVue
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
