<template>
  <div @click="jump" class="article-preview-tab">
    <span class="title">{{title}}</span>
    <span class="time">{{stamp}}</span>
    <span class="summary">{{summary}}</span>
  </div>
</template>


<script>
export default {
  data () {
    return {
    }
  },
  props: ['title', 'summary', 'articleId', 'time'],
  computed: {
    stamp () {
      return new Date(this.time).toLocaleDateString()
    }
  },
  methods: {
    jump () {
      this.$router.push(`/blog/${this.articleId}`)
    },
    genStamp (unix) {
      return new Date(unix).toString()
    }
  }

}
</script>

<style scoped lang="stylus">
.article-preview-tab
  border-radius 2px
  color #444
  padding 0 20px
  background #F9FAFC
  font-weight 300
  margin 0 auto 1rem
  max-height 14rem
  text-align left
  overflow hidden
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  transition all 0.3s cubic-bezier(.25,.8,.25,1)
  &:hover
    box-shadow 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    cursor pointer
  *
    margin 10px 0
  .time
    float right
  .title
    font-size 1.618em
  .summary
    display block
    font-size 1em
</style>
