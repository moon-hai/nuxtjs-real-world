<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <span class="tag-pill tag-default" v-for="tag in tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview'
import { mapState } from 'vuex'

export default {
  async asyncData ({ $axios, store }) {
    return await Promise.all([
      $axios.$get('/articles')
        .then(res => {
          store.dispatch('articles/getArticles', res.articles)
        })
        .catch(error => { throw error }),

      $axios.$get('/tags')
        .then(res => {
          store.dispatch('tags/getTags', res.tags)
        })
        .catch(error => { throw error })
    ])
  },

  computed: {
    ...mapState({ articles: state => state.articles.articles }),
    ...mapState({ tags: state => state.tags.tags })
  },

  components: {
    ArticlePreview
  }
}
</script>
