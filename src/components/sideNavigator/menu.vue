<template>
  <div class="nav-banner">
    <img id="nav-banner-logo" src="http://via.placeholder.com/100x100" alt="my-picture"/>
    <h2 id="nav-banner-title" style="font-size 19pt">丁科 / 二向箔</h2>
    <h3 id="nav-banner-subtitle"> 全栈工程师 </h3>
    <p id="nav-banner-summary"> 嘿，歌者，欢迎来到我的这片水塘 </p>
    <ul id="site-menu">
      <li><router-link to="/"> 首页 </router-link></li>
      <li><router-link to="/blog"> 博客 </router-link></li>
      <li><router-link to="#"> 简历 </router-link></li>
    </ul>
    <ul id="social-links">
      <li><a rel="noopener" href="https://github.com/DingDean" target="_blank"><icon name="github" scale="3"></icon></a></li>
    </ul>
  </div>
</template>

<style lang="stylus">
.nav-banner
  padding 20px
  #site-menu, #social-links
    display flex
    justify-content center
    a
      &.router-link-exact-active
        color #fff
  @media (min-width: 1025px)
    text-align center
    *
      padding 5px
    #nav-banner-logo
      border-radius 50%
    #nav-banner-title
      font-size 19pt
    #nav-banner-summary
      color primary-text-c
  @media (max-width: 1024px)
    display grid
    grid-template-columns repeat(6, 1fr)
    grid-template-rows repeat(3, 1fr)
    text-align left
    #nav-banner-title, #nav-banner-subtitle, #nav-banner-summary
      font-size 8pt
    #nav-banner-logo
      display none
    #nav-banner-title
      grid-area 1 / 1 / 2 / 5
      font-size 19pt
    #nav-banner-subtitle
      grid-area 2 / 1 / 3 / 5
      font-size 15pt
    #nav-banner-summary
      grid-area 3 / 1 / 4 / 5
      font-size 11pt
    #site-menu
      grid-row 1 / 2
      grid-column 5 / 7
    #social-links
      grid-row 2 /3
      grid-column 5 / 7
    #site-menu, #social-links
      li
        margin 0 5px
</style>
