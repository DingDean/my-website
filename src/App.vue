<template>
  <div id="app">
    <div id="app-top-half">
      <my-header/>
      <transition name="spinner">
        <my-loader v-if="loading"/>
      </transition>
      <router-view class="view"></router-view>
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

<style lang="stylus">
html
  font-size 12px

@media (min-width: 32rem) and (max-width: 48rem)
  html
    font-size 15px

@media (min-width: 48rem)
  html
    font-size 16px

body
  line-height 1.85
  background-color lighten(#eceef1, 30%)

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  margin-top 60px

.view
  margin-top 77px

#app-top-half
  min-height 98vh

.spinner-enter-active
  transition all .3s ease

.spinner-leave-active
  transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  animation fade-out 0.3s

.spinner-enter, .spinner-leave-to
  opacity 0

@keyframes fade-out
  0% transform translateY(0)
  100% transform translateY(20px)
</style>
