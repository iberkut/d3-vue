import Vue from 'vue'
import Router from 'vue-router'
import AddingSvgWithD3 from './pages/AddingSvgWithD3.vue'
import About from './pages/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddingSvgWithD3',
      component: AddingSvgWithD3
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
