<template>
  <div id="app">
    <div id="app-top-half">
      <my-header/>
      <my-loader v-if="loading"/>
      <router-view></router-view>
    </div>
    <my-legal-info/>
  </div>
</template>

<script>
import MyHeader from './components/Header.vue'
import MyLegalInfo from './components/legal.footer.vue'
import MyLoader from './components/loader.vue'

export default {
  name: 'app',
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    MyHeader,
    MyLegalInfo,
    MyLoader
  }
}
</script>

<style>
html {
  font-size: 12px;
}

@media (min-width: 32rem) and (max-width: 48rem) {
  html {
    font-size: 15px;
  }
}

@media (min-width: 48rem) {
  html {
    font-size: 16px;
  }
}

body {
  line-height: 1.85
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app-top-half {
  min-height: 98vh;
}

</style>
