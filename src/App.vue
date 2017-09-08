<template>
  <div id="app">
    <nav-burger></nav-burger>
    <navigator>
    </navigator>
    <main id="my-main">
      <router-view>
        This is the first level router view
      </router-view>
    </main>
  </div>
</template>

<script>
import Navigator from './components/sideNavigator/main'
import NavBurger from './components/burger'
export default {
  components: {
    Navigator,
    NavBurger
  }
}
</script>

<style lang="stylus">
#app
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
#my-main
  transition margin-left .3s ease
  margin-left side-menu-width
  @media (max-width: 1024px)
    margin-left 0

</style>
