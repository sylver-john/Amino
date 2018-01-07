import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Grid from '@/components/Grid'
import Studies from '@/components/Studies'
import Contribute from '@/components/Contribute'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/amino-acid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/studies',
      name: 'Studies',
      component: Studies
    },
    {
      path: '/contribute',
      name: 'Contribute',
      component: Contribute
    }
  ]
})
