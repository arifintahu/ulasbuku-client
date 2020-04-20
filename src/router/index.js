import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ulasan/:title',
    name: 'Review',
    component: () => import('@/views/Review.vue'),
    props: true
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import('@/views/Write.vue'),
    meta: {
      checkUser: true
    }
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('@/views/Signin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.checkUser) {
      if(store.getters.user) {
        next()
      } else {
        next({ name : 'Signin' })
      }
    } else {
      next()
    }
});

export default router
