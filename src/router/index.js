import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "video" */ '../views/video/Video.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    beforeEnter:(to, from, next) => {
      //console.log(store.state.user)
      if (to.name !== 'Login' && !store.state.user.isLogin) next({ name: 'Login' })
      else next()
      
    },
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile/Profile.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
  }
]

const router = new VueRouter({
  routes,
})

// router.beforeEach((to, from, next) => {
//   if(store.state.user.isLogin){
//     next('/profile')
//   }else{
//     next('/login')
//   }
// })


export default router
