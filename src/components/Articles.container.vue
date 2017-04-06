<template>
  <div class="articles-container">
    <section v-if="loading">
      <h1>不好意思，现在还没有一篇文章呢！以后这里可以当作一个彩蛋</h1>
    </section>
    <section v-if="sections_list">
      <div v-for="section in sections_list">
        <my-article-preview
          v-for="ele in articles_list[section]"
          :title="ele.title"
          :summary="ele.summary"
          :articleId="ele.id"
          :key="ele.id"
        ></my-article-preview>
      </div>
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
      sections_list: null,
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
        let list = response.body
        this.sections_list = Object.getOwnPropertyNames(list)
        this.articles_list = list
      }, function (response) {
        this.loading = false
        this.error = true
      })
    }
  }
}
</script>

<style scoped>
</style>
