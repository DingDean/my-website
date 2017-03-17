import Vue from 'vue'
import Router from 'vue-router'
import MyArticles from '@/components/Articles.container'
import MyArticle from '@/components/Articles'

Vue.use(Router)

export default new Router({
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
      path: '/articles/:article-id',
      component: MyArticle,
      props: true
    }
  ]
})
