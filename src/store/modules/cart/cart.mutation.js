import * as types from './action.types'

export default {

  [types.ADD]: (state, product) => {
    state.products.push(product)
  },

  [types.REMOVE]: (state, index) => {
    state.products.splice(index, 1)
  },

  [types.EMPTY]: (state) => {
    state.products = []
  },
  
}