import Vue from 'vue'
import Router from 'vue-router'
import GettingStarted from './pages/getting-started.vue'
import ScalesAndAxes from './pages/scales-and-axes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GettingStarted
    },
    {
      path: '/scales-and-axes',
      component: ScalesAndAxes
    }
  ]
})
