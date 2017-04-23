import Vue from 'vue'
import Router from 'vue-router'
import MyArticles from '@/components/Articles.container'
import MyArticle from '@/components/Articles'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'my-articles',
      component: MyArticles
    },
    {
      path: '/articles',
      component: MyArticles
    },
    {
      path: '/articles/:articleId',
      component: MyArticle,
      props: true
    }
  ]
})
