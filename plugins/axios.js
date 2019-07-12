export default function ({ $axios, store }) {
  $axios.setHeader('Content-Type', 'application/json; charset=utf-8')
  $axios.setHeader('Accept', 'application/json')

  $axios.onRequest(config => {
    if (store.state.auth.loggedIn) {
      $axios.setHeader('Authorization', state.auth.user.token)
    }
  })
}
