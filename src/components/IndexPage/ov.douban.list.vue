<template>
  <div class="bk-list">
    <img class="bk-img" :src="book.pic" :alt="book.title"/>
    <p class="bk-title">{{book.title}}</p>
    <p class="bk-desc">{{book.desc}}</p>
    <a :href="book.link" rel="noopener" target="_blank"> 此书详细 </a>
    <br/>
  </div>
</template>

<script>
export default {
  props: ['book']
}
</script>

<style lang="stylus">
.bk-list
  margin-bottom 5px
  height 145px
.bk-img
  float left
  margin-right 5px
.bk-title
  font-size 20pt
  margin-bottom 5px
.bk-desc
  margin-bottom 5px
  font-size 8pt
</style>
