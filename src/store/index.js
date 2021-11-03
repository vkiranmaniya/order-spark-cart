import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    cart
  }
})
