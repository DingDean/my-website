<template>
  <div id='tweet'>
    <p>{{tweet}}</p>
  </div>
</template>

<script>
export default {
  props: ['tweet']
}
</script>

<style lang="stylus">
#tweet
  border-radius 5px
  background #99A9BF
  max-width 800px
  text-align center
</style>
