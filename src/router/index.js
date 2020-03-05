import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index.vue'
import login from '@/views/login/index.vue'
Vue.use(Router) // aa19911221LWZ

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
