<template>
  <div class="my-article-containter">
    <my-error-handler v-if='error'></my-error-handler>
    <transition name="slide-fade">
      <div v-if="md" v-html="mdHtml" class="my-article"></div>
    </transition>
  </div>
</template>

<script>
import marked from 'marked'
import MyErrorHandler from './Error.vue'

export default {
  name: 'my-article',
  data () {
    return {
      error: null,
      md: null
    }
  },
  props: ['articleId'],
  created () {
    this.fetchData()
    this.$store.commit('activeLoad')
  },
  methods: {
    fetchData () {
      this.$http.get(`/articles/${this.articleId}`).then(res => {
        this.md = res.body.content
        this.$store.commit('deactiveLoad')
      }, res => {
        this.error = true
        this.$store.commit('deactiveLoad')
      })
    }
  },
  computed: {
    mdHtml () {
      return marked(this.md)
    }
  },
  components: {
    MyErrorHandler
  }
}
</script>

<style lang="stylus">
.my-article
  color #333
  font-weight 300
  text-align left
  padding 20px
  h1, h2, h3, h4
    margin 1.414rem 0 .5rem
    font-weight inherit
    line-height 1.42
  h1
    margin-top 0
    font-size 3.998rem
  h2
    font-size 2.827rem
  h3
    font-size 1.999rem
  h4
    font-size 1.414rem
  h5
    font-size 1.121rem
  h6
    font-size .88rem
  h7
    font-size .707rem
  img, canvas, iframe, video, svg, select, textarea
    max-width 100%
  img
    border-radius 50%
    height 200px
    width 200px
    margin 0 auto
  a
    color #3498db
    &:visited
      color #3498db
    &:hover
    &:focus
    &:active
      color #2980b9
  pre
    background-color #fafafa
    padding 1rem
    text-align left
  blockquote
    margin 0
    border-left 4px solid #ddd
    font-style italic
    padding 0 15px
    text-align left
    color #777
  ul, ol, li
    text-align left

.slide-fade-enter-active
  transition all .3s ease

.slide-fade-leave-active
  transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  opacity 0
  transform translateY(10px)
</style>
