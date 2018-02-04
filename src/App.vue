<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Space+Mono")
body, html
  background-color dark-primary-c
  font-family 'Space Mono', serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
#app
  width 100%
</style>
