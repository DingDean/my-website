<template>
  <div id="tmux-container">

    <div id="tmux-main">
      <div class="tmux-pane" id="pane-left">
        <p class="prompt">/Users/丁科/ >> <span>whoami</span> </p>
        <div class="stdout">
          <p>嘿，你好，欢迎来到我的二向箔！</p>
          <p>我叫丁科，现居杭州，是一名后端(NodeJS)工程师。</p>
          <p>我惯用JavaScript, Python以及Go。</p>
          <p>在这里，你可以找到我的书评，技术文章以及一些私人絮语。</p>
          <p>你可以通过邮件联系到我:
          <p>"me" + "@" + "dingkewz.com";
          <p>或者，让我请你喝杯咖啡吧！</p>
          <p>我基本上每个周末的早晨都会在这个<a _rel='noopener' target='_blank' href="http://map.baidu.com/?newmap=1&s=con%26wd%3D%E6%9D%AD%E5%B7%9E%E5%B8%82%E6%BB%A8%E6%B1%9F%E5%8C%BA%E6%B1%9F%E6%B1%89%E8%B7%AF1785%E5%8F%B7%26c%3D179&from=alamap&tpl=mapsite">星巴克</a>喝咖啡，写代码: </p>
          <p>背对收银台，您右手边的长桌，应该会有一个人对着Macbook Pro苦思，那就是我啦！</p>
          <p>如果您也在附近，我很愿意用一杯咖啡和您聊聊天，无论聊什么~</p>
          <p>期待遇见您！</p>
          <p>祝你一天愉快！ </p>
        </div>
      </div>
      <div class="tmux-pane" id="pane-right">
        <p class="prompt">/Users/丁科/Projects >> <span>ls -1G</span></p>
        <div class="stdout">
          <ul>
            <li> > <a _rel="noopener" target="_blank" href="https://blog.dingkewz.com"> Blog </a> </li>
            <li> > <a _rel="noopener" target="_blank" href="https://digitalme.dingkewz.com"> DigitalMe </a> </li>
            <li> > <a _rel="noopener" target="_blank" href="https://github.com/DingDean/tmux_pm25"> tmux_pm25 </a> </li>
            <li> > <a _rel="noopener" target="_blank" href="https://github.com/DingDean/"> GitHub </a> </li>
            <li> > <a _rel="noopener" target="_blank" href="https://www.douban.com/people/deanacroic/"> 豆瓣 </a> </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="tmux-info">
      <span id="info-a">[1-二向箔]</span>
      <span id="info-b">观察 思考 创造</span>
      <span id="info-c">{{localDate}}</span>
    </div>

  </div>
</template>

<script>
export default {
  mounted () {
    window.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key === 'b') {
        alert('哟，这是一个非常简单的隐藏界面，让我请你喝杯咖啡吧！\n我基本上每个周末的早晨都会在下列的星巴克喝咖啡，写代码:\n>杭州市滨江区江汉路1785号 背对收银台，您右手边的长桌，应该会有一个人对着Macbook Pro苦思，那就是我啦！\n如果您也在附近，我很愿意用一杯咖啡和您聊聊天，无论聊什么～\n期待遇见您！')
      }
    })
  },
  computed: {
    localDate () {
      let now = new Date()
      let minutes = now.getMinutes()
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
      return now.toLocaleDateString() + ' ' + now.getHours() + ':' + minutes
    }
  }
}
</script>

<style lang="stylus">
@media (min-width: 600px)
  #tmux-container
    position absolute
    top 10%
    left 10%
    width 80%
    min-width 1200px
    height 80%
    min-height 500px
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
    font-size 1em
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
      bottom 0
    #info-b
      display inline-block
    #info-c
      position absolute
      right 10px
      bottom 0

@media (max-width: 600px)
  #tmux-container
    position absolute
    top 5%
    left 5%
    width 90%
    height 90%
    border solid #151212 3px
    background-color light-primary-c
    display grid
    grid-template-rows auto 32px

  #tmux-main
    display grid
    grid-template-rows .5fr .5fr
    grid-template-columns 1fr
  .tmux-pane:first-child
    border-bottom dashed divider-c 2px
  .tmux-pane
    padding 5px
    font-size .6em
  .prompt
    margin-left 10px
    span
      color accent-c
  .stdout
    margin 10px
    line-height 1.4em

  #tmux-info
    width 100%
    height 32px
    border solid #151212 1px
    line-height 32px
    font-size .4em
    #info-a
      float left
      margin 0 10px
    #info-c
      float right
      margin 0 10px
@media (max-height: 640px)
  .tmux-pane
    font-size .3em
  .stdout
    line-height 2em
</style>
