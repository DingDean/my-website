<template>
  <div class="my-article-containter">
    <section v-if="loading">
      <h1>不好意思，现在还没有一篇文章呢！以后这里可以当作一个彩蛋</h1>
    </section>
    <div v-if="mdHtml" v-html="mdHtml" class="my-article"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'my-article',
  data () {
    return {
      loading: true,
      md: null
    }
  },
  props: ['articleId'],
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(`/articles/${this.articleId}`).then(res => {
        this.loading = false
        this.md = res.body.content
      })
    }
  },
  computed: {
    mdHtml () {
      return marked(this.md)
    }
  }
}
</script>

<style>
.my-article h1,
.my-article h2,
.my-article h3,
.my-article h4 {
  margin: 1.414rem 0 .5rem;
  font-weight: inherit;
  line-height: 1.42;
}

.my-article h1 {
  margin-top: 0;
  font-size: 3.998rem;
}

.my-article h2 {
  font-size: 2.827rem;
}

.my-article h3 {
  font-size: 1.999rem;
}

.my-article h4 {
  font-size: 1.414rem;
}

.my-article h5 {
  font-size: 1.121rem;
}

.my-article h6 {
  font-size: .88rem;
}

.my-article small {
  font-size: .707rem;
}

.my-article img,
.my-article canvas,
.my-article iframe,
.my-article video,
.my-article svg,
.my-article select,
.my-article textarea {
  max-width: 100%;
}

.my-article {
  color: #444;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 300;
  margin: 6rem auto 1rem;
  max-width: 48rem;
  text-align: center;
}

.my-article img {
  border-radius: 50%;
  height: 200px;
  margin: 0 auto;
  width: 200px;
}

.my-article a,
.my-article a:visited {
  color: #3498db;
}

.my-article a:hover,
.my-article a:focus,
.my-article a:active {
  color: #2980b9;
}

.my-article pre {
  background-color: #fafafa;
  padding: 1rem;
  text-align: left;
}

.my-article blockquote {
  margin: 0;
  border-left: 5px solid #7a7a7a;
  font-style: italic;
  padding: 1.33em;
  text-align: left;
}

.my-article ul,
.my-article ol,
.my-article li {
  text-align: left;
}

.my-article p {
  color: #777;
}

</style>
