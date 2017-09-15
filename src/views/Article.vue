<template>
  <div class="my-article-containter">
    <my-error-handler v-if='error'></my-error-handler>
    <transition name="slide-fade">
      <div v-if="article">
        <div class="my-article">
          <h1> {{article.title}} </h1>
          <div v-html="mdHtml"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import marked from 'marked'
import MyErrorHandler from '../components/Blog/Error.vue'

export default {
  name: 'my-article',
  data () {
    return {
      error: null,
      article: null
    }
  },
  props: ['articleId'],
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(`/api/blog/articles/${this.articleId}`).then(res => {
        if (res.status === 200) {
          this.article = res.body
        } else {
          console.log('404')
        }
      }, res => {
        this.error = true
      })
    }
  },
  computed: {
    mdHtml () {
      return marked(this.article.content)
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
  max-width 600px
  margin 0 auto
  p
    padding 10px 0
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
</style>
