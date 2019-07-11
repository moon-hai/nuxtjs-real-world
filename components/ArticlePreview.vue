<template>
  <div class="article-preview">
    <div class="article-meta">
      <nuxt-link :to="`/user/${article.author.username}/profile`"><img :src="article.author.image" /></nuxt-link>
      <div class="info">
        <nuxt-link :to="`/user/${article.author.username}/profile`" class="author">{{ article.author.username }}</nuxt-link>
        <span class="date">{{ article.createdAt }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <nuxt-link :to="`/article/${article.slug}`" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
      <span>Read more...</span>
      <ul class="tag-list" v-if="article.tagList.length">
        <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList" :key="tag">{{ tag }}</li>
      </ul>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'article-preview',

  props: {
    article: Object
  }
}
</script>
