const axios = require('axios').default

axios.interceptors.response.use(
  function(response) {
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)
function get(url, data) {
  return axios.get(url, {
    params: data,
  })
}

function post(url, data) {
  return axios.post(url, data)
}

export default {
  get,
  post,
}
