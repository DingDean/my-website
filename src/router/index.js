import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from '@/components/IndexPage/main'
// import MyArticles from '@/components/Blog/Articles.container'
// import MyArticle from '@/components/Blog/Articles'

const MyArticles = () => import('@/components/Blog/Articles.container')
const MyArticle = () => import('@/components/Blog/Articles')
const MyAbout = () => import('@/components/About')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MyIndex},
    {path: '/blog', component: MyArticles},
    {path: '/blog/:articleId', component: MyArticle, props: true},
    {path: '/about', component: MyAbout}
  ]
})
