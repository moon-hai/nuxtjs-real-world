import * as types from './mutation-types'

export const state = () => ({
  currentUser: null
})

export const mutations = {
  [types.registerUser] (state, payload) {
    state.currentUser = payload
  }
}

export const actions = {
  registerUser({ commit }, params) {
    this.$axios.$post(`/users`, { user: params })
      .then(res => {
        commit(types.registerUser, res.user)
      })
      .catch(error => { throw error })
  }
}
