import * as types from './action.types'

export const add = ({ commit }, product) => {
  commit(types.ADD, product);
}

export const remove = ({ commit, state }, product) => {
  const index = state.products.findIndex((item) => item.id === product.id)
  if(index === -1) {
    throw new Error('Product is not exist in cart')
  }
  commit(types.REMOVE, index);
}

export const empty = ({ commit }) => {
  commit(types.EMPTY);
}