import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CoinView from '../views/Coin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coin',
    name: 'CoinView',
    component: CoinView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
