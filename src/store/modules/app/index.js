import * as getters from './app.getters'
import mutations from './app.mutation'
import * as actions from './app.actions'

const state = {
  cart: {
    visible: false
  }
}

export default {
  namespaced: true,
  state,
  getters: getters,
  mutations: mutations,
  actions: actions
}