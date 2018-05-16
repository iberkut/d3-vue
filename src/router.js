import Vue from 'vue'
import Router from 'vue-router'
import AddingSvgWithD3 from './pages/AddingSvgWithD3.vue'
import DataJoins from './pages/DataJoins.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddingSvgWithD3',
      component: AddingSvgWithD3
    },
    {
      path: '/data-joins',
      name: 'DataJoins',
      component: DataJoins
    }
  ]
})
