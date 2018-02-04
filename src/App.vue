<template>
  <div id="app">
    <div id="tmux-container">
      <div id="tmux-main">
        <div class="tmux-pane" id="pane-left">
          <p class="prompt">/Users/丁科/ >> <span>whoami | cat</span> </p>
          <div class="stdout">
            <p>嘿，你好，欢迎来到我的二向箔！</p>
            <p>我叫丁科，现居杭州，是一名后端(NodeJS)工程师。</p>
            <p>我惯用JavaScript, Python以及Go。</p>
            <p>在这里，你可以找到我的书评，技术文章以及一些私人絮语。</p>
            <p>同时也可以给我发邮件: dingkework@hotmail.com </p>
            <p>祝你一天愉快！ </p>
          </div>
        </div>
        <div class="tmux-pane" id="pane-right">
          <p class="prompt">/Users/丁科/Projects >> <span>ls -1G</span></p>
          <div class="stdout">
            <ul>
              <li> > <a href="#"> Blog </a> </li>
              <li> > <a href="#"> tmux_pm25 </a> </li>
              <li> > <a href="#"> GitHub </a> </li>
              <li> > <a href="#"> 豆瓣 </a> </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="tmux-info">
        <span id="info-a">[1-二向箔]</span>
        <span id="info-b">观察 思考 创造</span>
        <span id="info-c">18/02/04 日 12:22</span>
      </div>
    </div>
    <div id="legal-info">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Space+Mono")
#app
  font-family 'Space Mono', serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background-color dark-primary-c
  height 100%
  #tmux-container
    position absolute
    top 10%
    left 10%
    width 80%
    min-width 1200px
    height 80%
    border solid #151212 3px
    background-color light-primary-c
    display grid
    grid-template-rows auto 32px

    #tmux-main
      height 100%
      display grid
      grid-template-columns .5fr .5fr
      .tmux-pane:first-child
        border-right dashed divider-c 2px
      .tmux-pane
        padding 5px
        font-size 1.5em
        .prompt
          margin-left 10px
          span
            color accent-c
        .stdout
          margin 10px
          line-height 1.8em

    #tmux-info
      width 100%
      height 32px
      border solid #151212 1px
      line-height 32px
      font-size .8em
      text-align center
      #info-a
        position absolute
        left 10px
      #info-b
        display inline-block
      #info-c
        position absolute
        right 10px
</style>
