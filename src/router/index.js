import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Grid from '@/components/Grid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'fr',
          component: Grid,
          props: {
            lang: 'fr'
          }
        },
        {
          path: 'us',
          component: Grid,
          props: {
            lang: 'us'
          }
        }
      ]
    }
  ]
})
