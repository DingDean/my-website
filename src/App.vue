<template>
  <div id="app">
    <main>
      <router-view>
        This is the first level router view
      </router-view>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
html, body, h1, h2, h3, h4, h5, h6, p, ul
  padding 0
  margin 0
ul
  list-style-type none
a
  text-decoration none
#app
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  padding 5px 24px
</style>
