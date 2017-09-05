<template>
  <div class="vcard">
    <el-card class="summary-card">
      <div slot="header">
        <span class="title">编程语言使用分布</span>
        <icon class="icon" name="code" scale="2"></icon>
      </div>
      <div class="content">
        <p> JavaScript </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.vcard
  max-width 640px
  margin 5px auto
  transition all 0.3s cubic-bezier(.25,.8,.25,1)
.title
  line-height 24px
  margin-left 15px
.icon
  float left
</style>
