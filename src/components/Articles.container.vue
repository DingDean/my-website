<template>
  <div class="articles-container">
    <my-error-handler v-if='error'></my-error-handler>
    <transition name="slide-fade">
      <section v-if="articles_list">
        <my-article-preview
          v-for="ele in articles_list"
          :title="ele.title"
          :summary="ele.summary"
          :articleId="ele.ref"
          :key="ele.id"
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
      error: null
    }
  },
  created () {
    this.$store.commit('activeLoad')
    this.fetchData()
  },
  components: {
    MyArticlePreview,
    MyErrorHandler
  },
  methods: {
    fetchData () {
      this.$http.get('/articles').then(response => {
        let list = response.body.list
        this.articles_list = list
        this.$store.commit('deactiveLoad')
      }, response => {
        this.$store.commit('deactiveLoad')
        this.error = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.slide-fade-enter-active
  transition all .3s ease

.slide-fade-leave-active
  transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  opacity 0
  transform translateY(10px)
</style>
