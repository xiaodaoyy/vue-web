import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const Index = resolve => require(['@/view/index'], resolve)
const Introduce = resolve => require(['@/components/Index/introduce'], resolve)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'intro',
          name: 'Introduce',
          component: Introduce
        }
      ]
    }
  ]
})
