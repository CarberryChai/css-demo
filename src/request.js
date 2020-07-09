const axios = require('axios').default

axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    // console.dir(error)
    return Promise.reject(error)
  }
)
function get(url, data) {
  return axios.get(url, {
    params: data,
  })
}

function post(url, data) {
  return axios.post(url, data).catch(err => {
    console.dir(err)
  })
}

export default {
  get,
  post,
}
