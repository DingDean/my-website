<template>
  <div class="articles-container">
    <h1>下面会有文章</h1>
    <my-article v-for="article in articles" :key="article.id" :mdHtml="article.content | md2Html"></my-article>
  </div>
</template>

<script>
import MyArticle from './Articles.vue'
import marked from 'marked'

var md2Html = function (md) {
  return marked(md, {sanitize: true})
}

export default {
  name: 'article',
  data () {
    return {
      md: '### 这是一篇文章',
      articles: [
        {content: '### 这是一个三标题', id: '1'},
        {content: '~~这段文字会被划掉~~', id: '2'}
      ]
    }
  },
  components: {
    MyArticle
  },
  filters: {
    md2Html
  }
}
</script>

<style scoped>
.articles-container {text-align: center}
</style>
