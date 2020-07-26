import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/habito',
    name: 'habit',
    component: () => import('../views/habit/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router