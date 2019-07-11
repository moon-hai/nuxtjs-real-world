<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <nuxt-link :to="`/user/${article.author.username}/profile`"><img :src="article.author.image" /></nuxt-link>
          <div class="info">
            <nuxt-link :to="`/user/${article.author.username}/profile`" class="author">{{ article.author.username }}</nuxt-link>
            <span class="date">{{ article.author.bio }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.description }}</p>
          <h2 id="introducing-ionic">{{ article.title }}</h2>
          <p>{{ article.body }}</p>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <nuxt-link :to="`/user/${article.author.username}/profile`"><img src="http://i.imgur.com/Qr71crq.jpg" /></nuxt-link>
          <div class="info">
            <nuxt-link :to="`/user/${article.author.username}/profile`" class="author">Eric Simons</nuxt-link>
            <span class="date">{{ article.author.bio }}</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
              Post Comment
              </button>
            </div>
          </form>

          <div class="comments-wrapper" v-if="comments.length">
            <Card v-for="comment in comments" :key="comment.id" :comment="comment" />
          </div>
          <p v-else>This article have no comment</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapState } from 'vuex'

export default {
  async asyncData({ $axios, store, params }) {
    return await Promise.all([
      $axios.$get(`/articles/${params.slug}`)
        .then(res => {
          store.dispatch('article/getArticle', res.article)
        })
        .catch(error => { throw error }),

      $axios.$get(`/articles/${params.slug}/comments`)
        .then(res => {
          store.dispatch('article/getComments', res.comments)
        })
        .catch(error => { throw error })
    ])
  },

  components: {
    Card
  },

  computed: {
    ...mapState({ article: state => state.article.article }),
    ...mapState({ comments: state => state.article.comments })
  },
}
</script>
