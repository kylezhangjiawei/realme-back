import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/logIn.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/clockIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      title:'Clock in'
    },
    children:[
      {
        path:'',
        name:'punchInSettings',
        component: () => import(/* webpackChunkName: "about" */ '../views/clockIn/punchInSettings.vue'),
        meta:{
          title:'Punch In Settings'
        }
      },
      {
        path:'cardManagement',
        name:'cardManagement',
        component: () => import(/* webpackChunkName: "about" */ '../views/clockIn/cardManagement.vue'),
        meta:{
          title:'Card management'
        }
      },
      {
        path:'dataStatistics',
        name:'dataStatistics',
        component: () => import(/* webpackChunkName: "about" */ '../views/clockIn/dataStatistics.vue'),
        meta:{
          title:'Data statistics'
        }
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
