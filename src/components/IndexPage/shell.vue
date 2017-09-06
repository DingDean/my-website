<template>
  <div>
    <post class="i-overview"></post>
    <douban class="i-overview"></douban>
    <github class="i-overview"></github>
    <musics class="i-overview"></musics>
    <german class="i-overview"></german>
  </div>
</template>

<script>
import Douban from './ov.douban'
import Github from './ov.github'
import Musics from './ov.music'
import German from './ov.deutsch'
import Post from './ov.post'

export default {
  components: {
    Douban,
    Github,
    Musics,
    German,
    Post
  }
}
</script>

<style lang="stylus">
.i-overview
  max-width 640px
  margin 5px auto
.i-ov-title
  line-height 24px
  margin-left 15px
.i-ov-icon
  float left
</style>
