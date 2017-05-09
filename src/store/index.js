import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    activeLoad (state) {
      state.loading = true
    },
    deactiveLoad (state) {
      state.loading = false
    }
  }
})
