import Vue from 'vue'
import Router from 'vue-router'
/**
 * 信息披露的路由
 */
import RouteAboutUs from '@/router/news/aboutUs'
Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const Index = resolve => require(['@/view/index'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: RouteAboutUs
    }
  ]
})
