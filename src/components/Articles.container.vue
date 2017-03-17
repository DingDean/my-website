<template>
  <div class="articles-container">
    <section v-if="loading">
      <h1>不好意思，现在还没有一篇文章呢！以后这里可以当作一个彩蛋</h1>
    </section>
    <section v-if="articles_list">
      <my-article-preview
        v-for="ele in articles_list"
        :title="ele.title"
        :content="ele.content"
        :articleId="ele.id"
        :key="ele.id"
      ></my-article-preview>
    </section>
  </div>
</template>

<script>
import MyArticle from './Articles.vue'
import MyArticlePreview from './Articles.preview.vue'
import marked from 'marked'

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
    MyArticle,
    MyArticlePreview
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
        this.articles_list = [
          {title: '标题一', content: '预览内容一', id: 'article_1'},
          {title: '标题二', content: '预览内容二', id: '2'},
          {title: '标题三', content: '预览内容三', id: '3'}
        ]
      }, function (response) {
        console.log('wrong')
      })
    }
  }
}
</script>

<style scoped>
</style>
