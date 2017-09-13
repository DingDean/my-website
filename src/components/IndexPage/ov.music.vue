<template>
  <ovtemplate>
      <div slot="header">
        <span class="i-ov-title"> 最近听歌排行 </span>
        <icon class="i-ov-icon" name="headphones" scale="2"></icon>
      </div>
      <div class="msc-view">
        <ul>
          <li v-for="o in 10" key="o">
            音乐 {{ o }}
          </li>
        </ul>
      </div>
  </ovtemplate>
</template>

<script>
export default {}
</script>

<style lang="stylus">
</style>
