import Vue from 'vue'
import Router from 'vue-router'
import MyArticles from '@/components/Articles.container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'my-articles',
      component: MyArticles
    }
  ]
})
