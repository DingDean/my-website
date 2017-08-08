// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import VueSocket from 'vue-socket.io'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-default/base.css'

Vue.config.productionTip = true
Vue.use(VueResource)
Vue.use(VueSocket, 'localhost:3000')
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  sockets: {
    connect () {
      console.log('Connected to server')
    }
  }
})
