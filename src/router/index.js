import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MyHello from '@/components/My-Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyHello',
      component: MyHello
    }
  ]
})
