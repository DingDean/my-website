// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import 'vue-awesome/icons/code'
import 'vue-awesome/icons/book'
import 'vue-awesome/icons/headphones'
import 'vue-awesome/icons/language'
import 'vue-awesome/icons/rss'
import Icon from 'vue-awesome/components/Icon'
import { Button, Card, Progress } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = true
Vue.use(VueResource)
Vue.component('icon', Icon)
Vue.use(Button)
Vue.use(Card)
Vue.use(Progress)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
