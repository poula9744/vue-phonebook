import { createRouter, createWebHistory } from 'vue-router'
import writeFormView from '../views/writeFormView.vue'
import listView from '../views/listView.vue'
import modifyFormView from '../views/modifyFormView.vue'

const routes = [
  {
    path: '/write',
    name: 'writeFormView',
    component: writeFormView
  },
  {
    path: '/',
    name: 'listView',
    component: listView
  },
  {
    path: '/modify',
    name: 'modifyFormView',
    component: modifyFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
