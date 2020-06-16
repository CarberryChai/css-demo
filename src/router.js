import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = []
const context = require.context('./components', false, /\.vue$/, 'lazy')

context.keys().forEach(key => {
  const name = /\w+/.exec(key)[0]
  routes.push({
    path: `/${name}`,
    name,
    component: () => context(key),
  })
})

const router = new VueRouter({ mode: 'history', routes })

export default router
