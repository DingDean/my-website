<template>
  <el-card class="i-overview">
    <div slot="header" class="i-ov-header">
      <slot name="header">
        <span class="i-ov-title"> 默认标题 </span>
        <icon class="i-ov-icon" name="rss" scale="2"></icon>
      </slot>
    </div>
    <transition name="ani-view-content">
      <slot>
        <p> loading </p>
      </slot>
    </transition>
  </el-card>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.i-overview
  transition width 0.3s ease
  max-width 640px
  margin 0 auto 10px
  background light-primary-c
  &:hover
    .el-card__header
      background hover-c
.el-card__header
  background dark-primary-c
.ov-post-time
  float right
.ani-view-content-enter-active
  transition all 1s ease
.ani-view-content-enter
  opacity 0
  transform translateY(-10px)
</style>
