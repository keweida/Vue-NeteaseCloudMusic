import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    component: () => import('@/views/index'),
    children: [
      {
        path: '/index',
        redirect: 'find'
      },
      {
        name: 'my',
        path: 'my',
        component: () => import('@/views/index/my')
      },
      {
        name: 'find',
        path: 'find',
        component: () => import('@/views/index/find')
      },
      {
        name: 'village',
        path: 'village',
        component: () => import('@/views/index/village')
      },
      {
        name: 'mv',
        path: 'mv',
        component: () => import('@/views/index/mv')
      }
    ]
  },
  {
    name: 'ranking',
    path: '/ranking',
    component: () => import('@/views/rankingList')
  }
]

const router = new VueRouter({
  routes
})

export default router
