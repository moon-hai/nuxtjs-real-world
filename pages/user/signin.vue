<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>

          <ul class="error-messages" v-if="errors">
            <li v-for="(error, index) in errors" :key="index">{{ key }} {{ error[0] }}</li>
          </ul>

          <form @submit.prevent="login()">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="params.email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="params.password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign in
            </button>
          </form>

          <p class="text-xs-center">
            <nuxt-link to="/user/signup">Have an account?</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        email: '',
        password: ''
      },
      errors: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            user: {
              email: this.params.email,
              password: this.params.password
            }
          }
        })
        .then(res => { return res })
        .catch(error => { this.errors = error.response.data.errors })
      } catch(e) { throw e }
    }
  },
}
</script>
