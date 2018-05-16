import Vue from 'vue'
import Router from 'vue-router'
import GettingStarted from './pages/GettingStarted.vue'
import ScalesAndAxes from './pages/ScalesAndAxes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GettingStarted',
      component: GettingStarted
    },
    {
      path: '/scales-and-axes',
      name: 'ScalesAndAxes',
      component: ScalesAndAxes
    }
  ]
})
