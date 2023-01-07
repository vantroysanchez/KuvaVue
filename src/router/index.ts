import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticated from './auth'

const routes =  [
    {
      path: '/',
      name: 'home',
      beforeEnter: [isAuthenticated],
      component: () => import(/*webpackChunkName: "Home"*/'../modules/shared/pages/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/*webpackChunkName: "Login"*/'../modules/accounts/pages/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/*webpackChunkName: "Register"*/'../modules/accounts/pages/Register.vue')
    },
    {
      path: '/header',
      name: 'header',
      beforeEnter: [isAuthenticated],
      component: () => import(/*webpackChunkName: "Register"*/'../modules/headers/pages/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      beforeEnter: [isAuthenticated],
      //name: 'register',
      component: () => import(/*webpackChunkName: "PageNotFound"*/'../modules/shared/pages/PageNotFound.vue')
    }
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

export default router
