import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../layout/Main.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'default',
  redirect: '/home',
  component: Main,
  children: [{
      path: 'home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: 'blog',
      name: 'blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: 'personal',
      name: 'personal',
      component: () => import('../views/Personal.vue')
    }
  ]
}, ]

const router = new VueRouter({
  routes
})

export default router