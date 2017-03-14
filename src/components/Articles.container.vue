<template>
  <div class="articles-container">
    <h1>下面会有文章</h1>
    <my-article :mdHtml="md | marked"></my-article>
  </div>
</template>

<script>
import MyArticle from './Articles.vue'
import marked from 'marked'

export default {
  name: 'article',
  data () {
    return {
      md: '### 这是一篇文章'
    }
  },
  components: {
    MyArticle
  },
  filters: {
    marked
  }
}
</script>

<style scoped>
.articles-container {text-align: center}
</style>
