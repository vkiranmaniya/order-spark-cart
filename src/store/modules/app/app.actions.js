import * as types from './action.types'

export const toggleCart = ({ commit, state }, visible) => {
  commit(types.TOGGLE_CART, visible ? visible : !state.cart.visible);
}