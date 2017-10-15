<template>
  <div class="my-share-btn" @click="share">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['link'],
  methods: {
    share () {
      console.log('invoking share functionality---with link', this.link)
      if (navigator.share) {
        console.log('navigator has web share api---')
        navigator.share({
          title: '二向箔',
          text: '这是我的个人网站，都来看看吧!',
          url: `${this.link}`
        })
          .then(() => console.log('Successful share'))
          .catch((error) => alert('Error sharing', error))
      } else {
        alert('navigator does not have web share api')
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
