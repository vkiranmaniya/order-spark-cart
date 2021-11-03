import * as types from './action.types'

export default {

  [types.TOGGLE_CART]: (state, visible) => {
    state.cart.visible = visible
  }
  
}