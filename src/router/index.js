import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const AppCener = () => import ('@/views/appCenter/index.vue');
const Portal = () => import ('@/views/portal/index.vue');
const ErrorPage = () => import ('@/views/errorPage/index.vue');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/appcenter',
          name: 'appcenter',
          component: AppCener
        },
        {
          path: '/portal',
          name: 'portal',
          component: Portal
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '*',
      name: 'error',
      component: ErrorPage
    }
  ]
})
