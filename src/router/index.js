import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/Vuetodo',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory('/Vuetodo'),
  routes,
})

export default router