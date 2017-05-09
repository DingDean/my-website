<template>
  <div class="my-article-containter">
    <my-error-handler v-if='error'></my-error-handler>
    <transition name="slide-fade">
      <div v-if="md" v-html="mdHtml" class="my-article"></div>
    </transition>
  </div>
</template>

<script>
import marked from 'marked'
import MyErrorHandler from './Error.vue'

export default {
  name: 'my-article',
  data () {
    return {
      error: null,
      md: null
    }
  },
  props: ['articleId'],
  created () {
    this.fetchData()
    this.$store.commit('activeLoad')
  },
  methods: {
    fetchData () {
      this.$http.get(`/articles/${this.articleId}`).then(res => {
        this.md = res.body.content
        this.$store.commit('deactiveLoad')
      }, res => {
        this.error = true
        this.$store.commit('deactiveLoad')
      })
    }
  },
  computed: {
    mdHtml () {
      return marked(this.md)
    }
  },
  components: {
    MyErrorHandler
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
  color: #333;
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 300;
  margin: 1rem auto 1rem;
  max-width: 48rem;
  text-align: left;
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
  border-left: 4px solid #ddd;
  font-style: italic;
  padding: 0 15px;
  text-align: left;
  color: #777;
}

.my-article ul,
.my-article ol,
.my-article li {
  text-align: left;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px)
}

</style>
