<template>
  <div id="app">
    <nav>
      <ul id='bottom-nav'>
        <li>
          <a _rel='noopener' href='https://github.com/DingDean' target='_blank'>
            <img src="./assets/GitHub-Mark-32px.png" alt="github"/>
          </a>
        </li>
        <li>
          <a _rel='noopener' href='https://www.douban.com/people/deanacroic/' target='_blank'>
            <img src="./assets/douban_32x32.png" alt="douban"/>
          </a>
        </li>
      </ul>
    </nav>

    <main>
      <div class='grid-center'></div>
      <header class='grid-center' id='welcome-msg'>
        <transition appear name='slide-left-right' mode='out-in'>
          <div @click="toggle('mainHeader')" v-if='isShown.mainHeader' key='default' class='laminated' >
            <h1>哦，嘿，你来了</h1>
            <h1>倍感荣幸</h1>
            <h1>我叫丁科</h1>
            <h1>欢迎来到我的二向箔</h1>
          </div>
          <div @click="toggle('mainHeader')" v-if="!isShown.mainHeader" key='hidden' class='laminated'>
            <h1>弹星者与二向箔</h1>
            <p>音乐，终端与命令行。</p>
            <p>平日的生活简单如斯。</p>
            <p>在一个喧嚣的都市，却活在一个容器里。</p>
            <p>这容器是自我，是象牙塔。</p>
            <p>难以分享，难以自察。</p>
            <p>挣扎于内心，却外示以冷静。</p>
            <p>在每日的独行中，笑过，怒过，哭过，之后重头来过。</p>
            <p>无意或有意，自己正在二维化。</p>
            <p>所以每天唯有音乐，终端与命令行。</p>
            <p>现实塌陷在网络，然投影却比真身更加代表自己。</p>
            <p>我是我自己的弹星者，向宇宙广播着我的存在。</p>
            <p>这是我力所能及的尝试。</p>
            <p>我将我自己掷入二向箔。</p>
            <p>所以，你好，歌者，再次欢迎你来到我的这片水塘。</p>
          </div>
        </transition>
      </header>

      <transition name='slide-fade' appear>
        <div class='grid-center' id='contact-info'>
          <p>请让我<span class="togglebtn" @click="toggle('info')">介绍下自己</span>吧。</p>
          <p>或者，你也可以直接给我发邮件: me@dingkewz.com</p>
          <p>再或者，请让我请你喝杯咖啡吧！</p>
          <p>不出意外，我周末的早晨(9点到11点半)会在
            <a
              _ref='noopener'
              target='_blank'
              href='http://map.baidu.com/?newmap=1&s=inf%26uid%3Db343657433ec89504354d775%26wd%3D%E5%8F%8C%E5%9F%8E%E5%9B%BD%E9%99%85+%E6%98%9F%E5%B7%B4%E5%85%8B%26all%3D1%26c%3D179&from=alamap&tpl=mapdots'>
              这个星巴克
            </a>
            喝咖啡，写代码。
          </p>
          <p>如果你正好也在附近，我很乐意与你聊聊，无论聊什么！</p>
          <p>期待遇见你！</p>
        </div>
      </transition>

      <transition name='slide-fade' appear>
        <div v-if='isShown.info' class='grid-center' id='programmer'>
          <p>我是一名后端工程师，擅长使用NodeJS。我以编程为生，也以编程为乐。
            我有这么一些<span class='togglebtn' @click="toggle('projects')">小项目</span>，你或许会觉得有用。
          </p>
        </div>
      </transition>
      <transition name='slide-fade'>
        <project v-if="isShown.projects" class='grid-all' id='projects'/>
      </transition>

      <transition name='slide-fade' appear>
        <div v-if='isShown.info'class='grid-center' id='writter'>
          <p>我平时也会写一些文章，它们大部分都被收录于我的
            <a _ref='noopener' target='_blank' href='https://blog.dingkewz.com'>静态博客</a>
            之中。
          </p>
        </div>
      </transition>

      <transition name='slide-fade' appear>
        <div v-if='isShown.info' class='grid-center' id='athlete'>
          <p>在编程和写作之余，我喜欢运动。
            我擅长<span class='togglebtn'>长跑</span>，也擅长<span class='togglebtn'>网球</span>。
            最近正在尝试去健身房练器械。
          </p>
        </div>
      </transition>

      <transition name='slide-fade' appear>
        <div v-if='isShown.info'class='grid-center' id='musicoholic'>
          <p>我呢，如果不戴耳机的话，是出不了门的。大概是一个人久了，真的非常喜欢<span class='togglebtn' @click="toggle('music')">听音乐</span>。</p>
        </div>
      </transition>
      <transition name='slide-fade' appear>
        <section v-if='isShown.music' class='grid-all' id='music'>
          <h1>爱听的音乐</h1>
          <!--云音乐外链-->
          <ul>
            <li>Blu</li>
            <li>Rain</li>
            <li>The Ecstacy of Gold</li>
          </ul>
        </section>
      </transition>

      <transition name='slide-fade' appear>
        <div v-if='isShown.info'class='grid-center' id='bookworm'>
          <p>买书和看书也是我的一大爱好，除了专业书籍，我喜欢买科幻小说。你大概也发现了，我非常喜欢《三体》，它是我的最爱。除此之外，《沙丘》是我最喜欢的外国科幻小说。这是我的豆瓣，欢迎随时向我推荐好看的书籍。</p>
        </div>
      </transition>

      <transition name='slide-fade' appear>
        <div v-if='isShown.info'class='grid-center' id='thankyou'>
          <p><span class='togglebtn'>谢谢</span>你能看到这里。</p>
          <p>如果你喜欢的话，你可以将这个网页<span class='togglebtn'>安装</span>到你的桌面。</p>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShown: {
        mainHeader: true,
        info: false,
        projects: false,
        music: false
      }
    }
  },
  components: {
    project: () => import('./components/projects.vue')
  },
  methods: {
    toggle (target) {
      if (!this.isShown.hasOwnProperty(target)) {
        return
      }
      this.isShown[target] = !this.isShown[target]
    }
  }
}
</script>

<style lang="stylus">
#app
  width 100%
  color #707070
  main
    display grid
    grid-template-columns 2fr 1fr 7fr 2fr
    grid-template-rows 16vh max-content
    grid-row-gap 16px
  .grid-center
    grid-column 2 / 4
  .grid-all
    grid-column 1 / 5
  .togglebtn
    color #a0d911
  .togglebtn:hover
    cursor pointer
#welcome-msg
  text-align center
  @media(min-width: 300px) {
    font-size .6em
  }
  @media(min-width: 700px) {
    font-size 1em
  }
  @media(min-width: 1024px) {
    text-align left
  }
.laminated:hover
  cursor pointer

#bottom-nav
  position absolute
  top 16px
  right 16px
  li
    float left
    margin-right 8px

.slide-fade-enter-active
  transition all .3s ease
.slide-fade-leave-active
  transition all .3s ease
.slide-fade-enter, .slide-fade-leave-to
  opacity 0
  transform translateY(10px)

.slide-left-right-enter-active
  transition all .8s ease
.slide-left-right-leave-active
  transition all .8s ease
.slide-left-right-enter
  opacity 0
  transform translateX(5px)
.slide-left-right-leave-to
  opacity 0
  transform translateX(-5px)
</style>
