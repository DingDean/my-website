<template>
  <div class="my-article-containter">
    <my-error-handler v-if='error'></my-error-handler>
    <sharebtn :link="getShareLink">
      <p> This is a share button </p>
    </sharebtn>
    <transition name="slide-fade">
      <div v-if="article">
        <div class="markdown-body">
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
    getShareLink () {
      return `https://dingkewz.com/blog/${this.articleId}`
    },
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
@import "../../node_modules/github-markdown-css/github-markdown.css"
.markdown-body
  box-sizing border-box
  min-width 200px
  max-width 980px
  margin 0 auto
  padding 45px

  @media (max-width: 767px)
    padding 15px
</style>
