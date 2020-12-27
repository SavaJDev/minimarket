import Vue from 'vue'
import VueRouter from 'vue-router'

import Basket from '../views/Basket'
import ProductList from '../views/ProductList'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'    
  },
  {
      name: 'main',
      path: '/main',
      component: Main
  },
  {
    name: 'productlist',
    path: '/productlist/:id',
    component: ProductList
  },
  {
    name: 'basket',
    path: '/basket',
    component: Basket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
