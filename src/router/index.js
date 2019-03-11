import Vue from 'vue'
import Router from 'vue-router'
/**
 * 信息披露的路由
 */
import RouteInformation from '@/router/Information/index'

Vue.use(Router)
Vue.use(require('vue-wechat-title'))

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/view/Index'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/investZone',
      name: 'investZone',
      component: resolve => require(['@/view/InvestZone'], resolve),
      meta: {
        title: '投资专区'
      }
    },
    {
      path: '/information',
      name: 'Information',
      component: resolve => require(['@/view/Information'], resolve),
      children: RouteInformation
    }
  ]
})
