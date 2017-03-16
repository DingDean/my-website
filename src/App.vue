<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
