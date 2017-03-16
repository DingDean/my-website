<template>
  <div class="articles-container">
    <section v-if="loading">
      <h1>不好意思，现在还没有一篇文章呢！以后这里可以当作一个彩蛋</h1>
    </section>
    <section v-if="articles">
      <my-article v-for="article in articles" :key="article.id" :mdHtml="article.content | md2Html"></my-article>
    </section>
    <section v-if="error">
      <h1>服务器故障！</h1>
    </section>
  </div>
</template>

<script>
import MyArticle from './Articles.vue'
import marked from 'marked'

export default {
  name: 'article',
  data () {
    return {
      loading: true,
      articles: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    MyArticle
  },
  filters: {
    md2Html (md) {
      return marked(md, {sanitize: true})
    }
  },
  methods: {
    fetchData () {
      this.$http.get('/articles').then(function (response) {
        this.loading = false
        this.articles = response.body.articles
      }, function (response) {
        console.log('wrong')
      })
    }
  }
}
</script>

<style scoped>
</style>
