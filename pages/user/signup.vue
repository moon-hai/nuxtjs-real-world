<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>

          <ul class="error-messages" v-if="errors">
            <li v-for="(error, index) in errors" :key="index">{{ index }} {{ error[0] }}</li>
          </ul>

          <form @submit.prevent="register()">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="params.username" placeholder="Your Name" required />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="params.email" placeholder="Email" required />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" v-model="params.password" placeholder="Password" required />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>

          <p class="text-xs-center">
            <nuxt-link to="/user/signin">Signin</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // middleware: 'guest',

  data() {
    return {
      params: {
        username: '',
        email: '',
        password: ''
      },
      errors: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('/users', { user: this.params })
          .then(async response => {
            await this.$auth.loginWith('local', {
              data: {
                user: {
                  email: this.params.email,
                  password: this.params.password
                }
              }
            })
            .then(res => {
              return res
            })
            .catch(error => { this.errors = error.response.data.errors })
          })
          .catch(error => {
            this.errors = error.response.data.errors
          })
      } catch (e) { throw e }
    }
  }
}
</script>
