<template>
  <ovtemplate>
    <div slot="header">
      <span class="i-ov-title"> 正在读 </span>
      <icon class="i-ov-icon" name="book" scale="2"></icon>
    </div>
    <div v-if="overview" class="bk-view">
      <p>这本书的简介</p>
      <a href="#" target="_blank"> 此书详细 </a>
      <a href="https://book.douban.com/people/deanacroic" target="_blank"> 我的豆瓣 </a>
    </div>
  </ovtemplate>
</template>

<script>
export default {
  data () {
    return {
      overview: null
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

<style lang="stylus">
</style>
