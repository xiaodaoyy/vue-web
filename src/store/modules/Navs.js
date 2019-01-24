// initial state
const state = {
  NavIndex: 0
}

// actions
const actions = {
  NavsChange (context, obj) {
    context.commit('NavsChange', obj)
  }
}

// mutations
const mutations = {
  NavsChange (state, indexObj) {
    state.NavIndex = indexObj
  }
}

// getters
const getters = {}

export default {
  state,
  getters,
  actions,
  mutations
}
