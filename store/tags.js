import * as types from './mutation-types'

export const state = () => ({
  tags: []
})

export const mutations = {
  [types.getTags] (state, payload) {
    state.tags = payload
  }
}

export const actions = {
  getTags({ commit }, tags) {
    commit(types.getTags, tags)
  }
}
