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
        <el-button type="text" size="large"> <router-link :to="overview.link">阅读文章</router-link> </el-button>
        <el-button type="text" size="large"> <router-link to="/blog">更多文章</router-link> </el-button>
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
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/blog/recentpost').then(res => {
        let data = res.body.post
        console.log(data)
        this.overview = {
          title: data.title,
          time: data.mtime,
          summary: data.summary,
          link: `/blog/${data.inode}`
        }
      }, res => {
        this.overview = {
          title: 'temp',
          time: 0,
          summary: 'temp',
          link: `/blog/`
        }
      })
    }
  }
}
</script>
