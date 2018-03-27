<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@font-face
    font-family: Chancery;
    src: url(./assets/fonts/chancery/apple-chancery-webfont.eot);
    src: local("Apple Chancery"),url(./assets/fonts/chancery/apple-chancery-webfont.eot?#iefix) format("embedded-opentype"),url(./assets/fonts/chancery/apple-chancery-webfont.woff2) format("woff2"),url(./assets/fonts/chancery/apple-chancery-webfont.woff) format("woff"),url(./assets/fonts/chancery/apple-chancery-webfont.ttf) format("truetype"),url(./assets/fonts/chancery/apple-chancery-webfont.svg#apple-chancery) format("svg");
    font-weight: lighter;
    font-style: normal
body, html
  background-color dark-primary-c
  font-family serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
#app
  width 100%
</style>
