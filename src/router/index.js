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
    name: 'Habit',
    component: () => import('../views/habit/HabitIndex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router