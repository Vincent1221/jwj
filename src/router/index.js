import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/index.vue')
const Login = () => import('@/views/login/index.vue')
const AppCener = () => import('@/views/appCenter/index.vue');
const Portal = () => import('@/views/portal/index.vue');
const Voice = () => import('@/views/voice/index.vue');
const Video = () => import('@/views/video/index.vue');
Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Home },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'appcenter',
          name: 'appcenter',
          component: AppCener
        },
        {
          path: 'portal',
          name: 'portal',
          component: Portal
        },
        {
          path: 'voice',
          name: 'voice',
          component: Voice
        },
        {
          path: 'video',
          name: 'video',
          component: Video
        }
      ]
    },
    {
      path: '/*',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router;