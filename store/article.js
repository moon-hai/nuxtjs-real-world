import * as types from './mutation-types'

export const state = () => ({
  article: null,
  comments: []
})

export const mutations = {
  [types.getArticle] (state, payload) {
    state.article = payload
  },

  [types.getComments] (state, payload) {
    state.comments = payload
  }
}

export const actions = {
  getArticle({ commit }, article) {
    commit(types.getArticle, article)
  },

  getComments({ commit }, comments) {
    commit(types.getComments, comments)
  }
}
