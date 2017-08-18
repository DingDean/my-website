import Vue from 'vue'
import Router from 'vue-router'
// import MyArticles from '@/components/Articles.container'
// import MyArticle from '@/components/Articles'
// import MyAbout from '@/components/About'
const MyArticles = () => import('@/components/Articles.container')
const MyArticle = () => import('@/components/Aritcles')
const MyAbout = () => import('@/components/About')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MyArticles},
    {path: '/articles', component: MyArticles},
    {path: '/articles/:articleId', component: MyArticle, props: true},
    {path: '/about', component: MyAbout}
  ]
})
