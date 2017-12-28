<template>
  <div id="app">
    <div class="grid-wrapper">
      <div class="upper-box">
      </div>
      <div class="center-box">
        <p>丁科 / 后端</p>
        <p>观察 思考 创造</p>
        <ul>
          <li>
            <a href="https://blog.dingkewz.com" _rel="noopener" target="_blank">Blog</a>
          </li>
          <li>
            <a href="https://github.com/DingDean/tmux_pm25" _rel="noopener" target="_blank">tmux_pm25</a>
          </li>
          <li>
            <a href="https://github.com/DingDean" _rel="noopener" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.douban.com/people/deanacroic/" _rel="noopener" target="_blank">豆瓣</a>
          </li>
          <li>
            <a href="https://blog.dingkewz.com/about" _rel="noopener" target="_blank">关于我</a>
          </li>
        </ul>
      </div>
      <div class="bot-box">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
#app
  background #EEEEEE
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #34495e
  .grid-wrapper
    max-width 800px
    margin 0 auto
    height 100vh
    display grid
    li, p
      line-height 32px
    p
      letter-spacing 2px
    a:hover
      color #c05b4d
</style>
