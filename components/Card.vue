<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ comment.body }}</p>
    </div>
    <div class="card-footer">
      <nuxt-link :to="`/user/${comment.author.username}/profile`" class="comment-author"><img :src="comment.author.image" class="comment-author-img" /></nuxt-link>
      &nbsp;
      <nuxt-link :to="`/user/${comment.author.username}/profile`" class="comment-author">{{ comment.author.username }}</nuxt-link>
      <span class="date-posted">{{ comment.createdAt }}</span>
      <span class="mod-options">
        <i class="ion-edit"></i>
        <i class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',

  props: {
    comment: Object
  }
}
</script>
