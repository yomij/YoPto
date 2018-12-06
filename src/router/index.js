import Vue from 'vue'
import Router from 'vue-router'
import AsPhotographer from '@/components/AsPhotographer/AsPhotographer'

import MainPage from '@/pages/MainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'MainPage',
    component: MainPage
  }, {
    path: '/AsPhotographer',
    name: 'AsPhotographer',
    component: AsPhotographer
  }]
})
