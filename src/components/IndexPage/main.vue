<template>
  <div class="ov-container">
    <post></post>
    <douban></douban>
    <musics></musics>
    <german></german>
  </div>
</template>

<script>
import Douban from './ov.douban'
// import Github from './ov.github'
import Musics from './ov.music'
import German from './ov.deutsch'
import Post from './ov.post'

export default {
  components: {
    Douban,
    // Github,
    Musics,
    German,
    Post
  }
}
</script>

<style lang="stylus">
.ov-container
  padding 10px 30px
.i-ov-title
  line-height 24px
  margin-left 15px
  color white
  font-size 20pt
.i-ov-icon
  color white
  float left
</style>
