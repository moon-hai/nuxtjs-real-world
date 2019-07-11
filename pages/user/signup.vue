<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="params.username" placeholder="Your Name" required />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" v-model="params.email" placeholder="Email" required />
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" v-model="params.password" placeholder="Password" required />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="register()">
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
  data() {
    return {
      params: {
        username: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('/users', {
          user: params
        })

        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
        })

        this.$router.push('/')
      } catch (e) {
        throw e
      }
    },

    // ...mapActions({
    //   registerUser: 'user/registerUser'
    // }),

    // register() {
    //   this.registerUser(this.params)
    // }
  }
}
</script>
