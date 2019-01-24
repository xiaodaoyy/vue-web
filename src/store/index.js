import Vue from 'vue'
import Vuex from 'vuex'
import Navs from './modules/Navs'
import Information from './modules/Information'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Navs,
    Information
  },
  strict: true
})
