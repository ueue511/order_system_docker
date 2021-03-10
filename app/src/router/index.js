import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Subtotal from '../views/Subtotal.vue'
import TebleGesto from '../views/TebleGesto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Subtotal',
    name: 'Subtotal',
    component: Subtotal
  },
  {
    path: '/TebleGesto',
    name: 'TebleGesto',
    component: TebleGesto
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
