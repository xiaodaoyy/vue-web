import Vue from 'vue'
import Router from 'vue-router'
/**
 * 信息披露的路由
 */
import RouteAboutUs from '@/router/Information/aboutUs'
import RouteSafe from '@/router/Information/safe'
import RouteLaws from '@/router/Information/laws'
Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const Index = resolve => require(['@/view/index'], resolve)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '信息披露',
        index: [0, 0]
      },
      children: RouteAboutUs.concat(RouteSafe).concat(RouteLaws)
    }
  ]
})
