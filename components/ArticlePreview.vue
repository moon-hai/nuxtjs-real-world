<template>
  <div class="article-preview">
    <div class="article-meta">
      <nuxt-link to="/user/1/profile"><img src="http://i.imgur.com/Qr71crq.jpg" /></nuxt-link>
      <div class="info">
        <nuxt-link to="/user/1/profile" class="author">Eric Simons</nuxt-link>
        <span class="date">January 20th</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> 29
      </button>
    </div>
    <nuxt-link to="/article/1" class="preview-link">
      <h1>How to build webapps that scale</h1>
      <p>This is the description for the post.</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline">Music</li>
        <li class="tag-default tag-pill tag-outline">Song</li>
      </ul>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'article-preview'
}
</script>
