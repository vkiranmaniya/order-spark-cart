import * as getters from './cart.getters'
import mutations from './cart.mutation'
import * as actions from './cart.actions'

const state = {
  products: []
}

export default {
  namespaced: true,
  state,
  getters: getters,
  mutations: mutations,
  actions: actions
}