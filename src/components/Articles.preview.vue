<template>
  <div @click="jump" class="article-preview-tab">
    <h1>{{title}}</h1>
    <p>{{summary}}</p>
  </div>
</template>


<script>
export default {
  data () {
    return {
    }
  },
  props: ['title', 'summary', 'articleId'],
  methods: {
    jump () {
      this.$router.push(`/articles/${this.articleId}`)
    }
  }

}
</script>

<style scoped lang="stylus">
.article-preview-tab
  border-radius 2px
  color #444
  padding 0 5px
  background #F9FAFC
  font-weight 300
  margin 1rem auto 1rem
  max-height 14rem
  text-align left
  overflow hidden
  box-shadow 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  transition all 0.3s cubic-bezier(.25,.8,.25,1)
  &:hover
    box-shadow 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    cursor pointer
</style>
