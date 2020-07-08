import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/reset.css'
import http from './request'
import Cookies from 'js-cookie'
Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$cookie = Cookies

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
