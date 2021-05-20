import Vue from 'vue'
import VueRouter from 'vue-router'
import weatherCast from '../components/weatherCast.vue'
import dogInfo from '../components/dogInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'weatherCast',
    component: weatherCast
  },
  {
    path: '/dog-info',
    name: 'dogInfo',
    component: dogInfo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
