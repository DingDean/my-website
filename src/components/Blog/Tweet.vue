<template>
  <div id='tweet'>
    <p>{{tweet}}</p>
    <el-progress :percentage="percentage" :show-text="false" :seg="seg"></el-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percentage: 100
    }
  },
  props: ['tweet', 'seg'],
  methods: {
    cd () {
      if (this.percentage > 0) {
        this.percentage --
        setTimeout(this.cd, this.seg * 1000)
      }
    }
  },
  created () {
    this.cd()
  }
}
</script>

<style lang="stylus">
#tweet
  border-radius 5px
  background #99A9BF
  max-width 800px
  text-align center
</style>
