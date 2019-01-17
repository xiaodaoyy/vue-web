import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import Components from '@/config/components'

Vue.config.productionTip = false
Vue.use(require('vue-wechat-title'))
Vue.use(Components)

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
