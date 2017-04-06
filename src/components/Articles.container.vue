<template>
  <div class="articles-container">
    <section v-if="loading">
      <h1>不好意思，现在还没有一篇文章呢！以后这里可以当作一个彩蛋</h1>
    </section>
    <section v-if="articles_list">
      <my-article-preview
        v-for="ele in articles_list"
        :title="ele.title"
        :content="ele.summary"
        :articleId="ele.id"
        :key="ele.id"
      ></my-article-preview>
    </section>
    <section v-if="error">
      <h1>服务器内部错误！以后这里可以有个好玩的东西！</h1>
    </section>
  </div>
</template>

<script>
import MyArticlePreview from './Articles.preview.vue'

export default {
  name: 'article',
  data () {
    return {
      loading: true,
      articles_list: null,
      error: null
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    MyArticlePreview
  },
  methods: {
    fetchData () {
      this.$http.get('/articles').then(function (response) {
        this.loading = false
        this.articles_list = response.body.articles
      }, function (response) {
        this.loading = false
        this.error = true
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>
</style>
