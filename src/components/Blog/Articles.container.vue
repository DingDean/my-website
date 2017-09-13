<template>
  <div class="articles-container">
    <my-error-handler v-if='error'></my-error-handler>
    <transition name="slide-fade">
      <section v-if="articles_list">
        <my-article-preview
          v-for="ele in articles_list"
          :title="ele.title"
          :summary="ele.summary"
          :articleId="ele.inode"
          :time="ele.ctime"
          :key="ele.inode"
        ></my-article-preview>
      </section>
    </transition>
  </div>
</template>

<script>
import MyArticlePreview from './Articles.preview.vue'
import MyErrorHandler from './Error.vue'

export default {
  name: 'article',
  data () {
    return {
      articles_list: null,
      error: null,
      tweet: null
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    MyArticlePreview,
    MyErrorHandler
  },
  methods: {
    fetchData () {
      this.$http.get('/api/blog/articles').then(response => {
        let list = response.body.list
        this.articles_list = list
      }, response => {
        this.error = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.articles-container
  margin 0 20px
  padding 10px
</style>
