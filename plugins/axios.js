export default function ({ $axios }) {
  $axios.setHeader('Content-Type', 'application/json; charset=utf-8')
  $axios.setHeader('Accept', 'application/json')

  $axios.onRequest(config => {
  
  })
}
