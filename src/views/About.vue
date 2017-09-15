<template>
  <div class="about">
    <transition name="slide-fade">
      <div>
        <h2>嘿，你好</h2>
        <p>欢迎你来到我的二向箔，我叫丁科, 来自
          <a href="https://zh.wikipedia.org/wiki/%E6%B8%A9%E5%B7%9E%E5%B8%82" rel="noopener" target="_blank">
            <span class="place">温州</span>
          </a>，现居
          <a href="https://zh.wikipedia.org/wiki/%E6%9D%AD%E5%B7%9E%E5%B8%82" ref="noopener" target="_blank">
            <span class="place">杭州</span>．
          </a>
        </p>
        <p>你大概能猜到，我是个程序员，现在主要做后端开发．我的工作语言是<span class="pl">JavaScript</span>, 但在业余时，我喜欢玩<span class="pl">GoLang</span>以及<span class="pl">Haskell</span>．</p>
        <p>我喜欢钻研各种技术，渴望利用他们来创造些什么.</p>
        <p>现在我有两个并行的学习计划：
          <a href="https://cn.udacity.com/robotics/" rel="noopener" target="_blank">
            <span class="tech">Robotics</span>
          </a>
          以及
          <a href="https://cn.udacity.com/course/machine-learning-engineer-nanodegree--nd009-cn-advanced/" rel="noopener" target="_blank">
            <span class="tech">Machine Learning</span>
          </a>.
          我想告诉你，Udacity上，这两门课程可不便宜．不过钱赚过来就是用来持续学习的嘛．
        </p>
        <p>我希望能在今年年底前从这两个项目毕业．与此同时，我能逐步的运用所学的技术来打造属于我自己的管家，就像<a href="http://ironman.wikia.com/wiki/J.A.R.V.I.S." rel="noopener" target="_blank">Jarvis</a>, 当然不会像他一样智能，不过好歹是个开头嘛．</p>
        <p>这个工程牵涉到的东西太多了，除了上面的两个学习计划，我还是得找时间学习下
          <span class="tech">Rasperry</span>,
          <span class="tech">Arduino</span>,
          <span class="tech">Computer Vision</span>,
          <span class="tech">NLP</span>
          等等等等
        </p>
        <p>所以时不我待啊，还是抓紧时间学习吧．</p>
        <p>最后，再次欢迎你来到我的二向箔，希望这里能为你提供哪怕些许的帮助.</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.about
  max-width 600px
  margin 0 auto
  padding 20px
  @media(max-width: 1024px)
    p
      line-height 30px
  @media(min-width: 1025px)
    p
      line-height 50px
a
  text-decoration none
.place
  color #4FC3F7
.pl
  color #9CCC65
.tech
  color #FFA726
</style>
