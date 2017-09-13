<template>
  <div :class="[hidden ? up : down ]" @click="toggle">
  </div>
</template>

<script>
export default {
  data () {
    return {
      hidden: true,
      up: 'up',
      down: 'down'
    }
  },
  methods: {
    toggle () {
      this.hidden = !this.hidden
      this.$store.commit('toggleMenu')
    }
  }
}
</script>

<style lang="stylus" scoped>
div
  display none
  width 20px
  height 20px
  border-top 5px solid accent-c
  border-left 5px solid accent-c
  @media (max-width: 1024px)
    display block
    position fixed
    bottom 15px
    right 15px
    z-index 9999
.up
  transform rotate(45deg)
.down
  transform rotate(225deg)
</style>
