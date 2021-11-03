import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import app from '@/store/modules/app'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    cart
  },
  plugins: [
    createPersistedState({
      paths: ['cart']
    })
  ]
})
