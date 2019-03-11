import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Components from '@/config/components'
import { Page } from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))
Vue.use(Components)
Vue.component('Page', Page)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
