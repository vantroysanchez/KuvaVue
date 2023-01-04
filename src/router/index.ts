import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
    {
      path: '/',
      name: 'home',
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
      path: '/:pathMatch(.*)*',
      //name: 'register',
      component: () => import(/*webpackChunkName: "PageNotFound"*/'../modules/shared/pages/PageNotFound.vue')
    }
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

export default router
