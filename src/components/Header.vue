<template>
  <header class="header">
    <nav class="inner">
      <router-link to="/" exact>
        <div class="logo">
          <p class="logo-text">DK</p>
        </div>
      </router-link>
      <router-link to="/articles">博客</router-link>
      <router-link to="/about">关于我</router-link>
      <a class="github" :href="github_url" rel="noopener" target="_blank"> GitHub </a>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      github_url: 'https://github.com/DingDean'
    }
  },
  methods: {
    goToIndex () {
      this.$router.push('/')
    }
  },
  name: 'my-header'
}
</script>

<style scoped lang="stylus">
a
  color #34495e
  text-decoration none

.header
  background-color #689F38
  position fixed
  left 0
  right 0
  top 0
  height 60px
  .inner
    max-width 800px
    box-sizing border-box
    margin 0 auto
    padding 15px 5px
  a
    color rgba(255,255,255,.8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    margin-right 1.8em
    &:hover
      color $fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(3)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    padding 5px 0
    float right

.logo
  width 32px
  height 32px
  background-color #1976D2
  margin-right 10px
  display inline-block
  vertical-align middle
  .logo-text
    text-align center
    margin 0
    padding 2px 0


</style>
