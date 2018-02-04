import Vue from 'vue'
import Router from 'vue-router'
import MyIndex from '@/views/Index'

// const MyIndex = () => import('@/views/Index')
// const MyArticles = () => import('@/views/Articles')
// const MyArticle = () => import('@/views/Article')
// const MyAbout = () => import('@/views/About')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: MyIndex},
    {path: '*', component: MyIndex}
  ]
})
