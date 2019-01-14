import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const Index = resolve => require(['@/view/index'], resolve)
const Company = resolve => require(['@/view/intro/company'], resolve)
const Shareholders = resolve => require(['@/view/intro/shareholders'], resolve)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'company',
          name: 'Company',
          component: Company
        },
        {
          path: 'shareholders',
          name: 'Shareholders',
          component: Shareholders
        }
      ]
    }
  ]
})
