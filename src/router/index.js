import Vue from 'vue'
import Router from 'vue-router'
/**
 * 信息披露的路由
 */
import RouteInformation from '@/router/Information/index'

Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const Index = resolve => require(['@/view/Index'], resolve)
const Information = resolve => require(['@/view/Information'], resolve)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/information',
      name: 'Information',
      component: Information,
      children: RouteInformation
    }
  ]
})
