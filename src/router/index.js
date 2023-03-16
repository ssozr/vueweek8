import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/ArticlesView.vue')
        },
        {
          path: 'teachers',
          name: 'teachers',
          component: () => import('../views/ClassesView.vue')
        },
        {
          path: 'article/:id',
          component: () => import('../views/ArticleView.vue')
        },
        {
          path: 'class/:id',
          component: () => import('../views/ClassView.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/CartView.vue')
        },
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'order',
          component: () => import('../views/OrderView.vue')
        }
      ]
      
    },
  ]
})

export default router
