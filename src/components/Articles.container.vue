<template>
  <div class="articles-container">
    <my-error-handler v-if='error'></my-error-handler>
    <transition name='el-zoom-in-top'>
      <my-tweet v-if='tweet' :tweet="tweet.Tweet" :seg="Number(tweet.Cd)"></my-tweet>
    </transition>
    <transition name="slide-fade">
      <section v-if="articles_list">
        <my-article-preview
          v-for="ele in articles_list"
          :title="ele.title"
          :summary="ele.summary"
          :articleId="ele.ref"
          :time="ele.time"
          :key="ele.id"
        ></my-article-preview>
      </section>
    </transition>
  </div>
</template>

<script>
import MyArticlePreview from './Articles.preview.vue'
import MyErrorHandler from './Error.vue'
import MyTweet from './Tweet.vue'

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
    this.$socket.emit('sync')
    this.$store.commit('activeLoad')
    this.fetchData()

    this.$options.sockets.twitter = function (msg) {
      console.log('receive new tweet')
      if (!this.tweet) {
        this.tweet = msg
      }
    }

    this.$options.sockets.burn = function () {
      this.tweet = null
    }
  },
  components: {
    MyArticlePreview,
    MyErrorHandler,
    MyTweet
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
