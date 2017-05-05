<template>
  <div id='my-header'>
    <h1 @click="goToIndex" id="my-title">二向箔</h1>
    <div id="my-desc">
      <p>现实坍缩于网络</p>
    </div>
    <a v-bind:href="github_url" rel="noopener" target="_blank"><img src="/static/Github_PNG/GitHub-Mark-32px.png" alt="GitHub"/></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      github_url: 'https://github.com/DingDean'
    }
  },
  methods: {
    goToIndex () {
      this.$router.push('/')
    }
  },
  name: 'my-header'
}
</script>

<style scoped>
#my-header {
  margin: 0 auto 2rem auto;
  padding-top: 2rem;
  max-height:14rem;
}

#my-title {
  text-align: center;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin: 0 auto;
  font-size: 65px;
  line-height: 0.9;
}

#my-title:hover {
  cursor: pointer;
}

#my-desc {
  text-align: center;
  margin: 15px auto;
}

#my-desc p {
  margin: 0 auto;
}

a {
  display: block;
  max-width: 40px;
  margin: auto;
}

img {
  display: block;
  margin: auto;
}
</style>
