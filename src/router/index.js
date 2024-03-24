import { createRouter, createWebHistory } from 'vue-router'
import writeFormView from '../views/writeFormView.vue'
import listView from '../views/listView.vue'
import modifyFormView from '../views/modifyFormView.vue'

const routes = [
  {
    path: '/write',
    name: '/write',
    component: writeFormView
  },
  {
    path: '/',
    name: '/',
    component: listView
  },
  {
    path: '/modify/:personId',
    name: '/modify',
    component: modifyFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
