<template>
  <ovtemplate>
      <div slot="header">
        <span class="i-ov-title"> 最新文章 </span>
        <icon class="i-ov-icon" name="rss" scale="2"></icon>
      </div>
      <div v-if="overview" class="atc-view">
        <span class="ov-post-title">{{overview.title}}</span>
        <span class="ov-post-time">{{stamp}}</span>
        <span class="ov-post-summary">{{overview.summary}}</span>
        <el-button type="text" size="large"> <a rel="noopener" :href="overview.link" target="__blank">阅读文章</a> </el-button>
        <el-button type="text" size="large"> <a rel="noopener" href="https://dingkewz.com" target="__blank">前往博客</a> </el-button>
      </div>
  </ovtemplate>
</template>

<style lang="stylus">
.act-view
  overflow hidden
.ov-post-time
  float right
  color primary-text-c
.ov-post-title
  font-size 1.618em
  color primary-text-c
.ov-post-summary
  display block
  font-size 1em
  color secondary-text-c
</style>

<script>
export default {
  data () {
    return {
      overview: null
    }
  },
  computed: {
    stamp () {
      return this.overview ? new Date(this.overview.time).toLocaleDateString() : 0
    }
  },
  mounted () {
    setTimeout(this.fetchData, 2000)
  },
  methods: {
    fetchData () {
      this.overview = {
        title: '弹星者和二向箔',
        time: Date.now(),
        summary: '嘿，歌者，你好，欢迎来到我的这片水塘',
        link: 'https://dingkewz.com/articles/welcome'
      }
    }
  }
}
</script>
