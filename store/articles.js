import * as types from './mutation-types'

export const state = () => ({
  articles: []
})

export const mutations = {
  [types.getArticles] (state, payload) {
    state.articles = payload
  }
}

export const actions = {
  getArticles({ commit }, data) {
    commit(types.getArticles, data)
  }
}
