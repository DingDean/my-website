<template>
  <div :class="classObject" @click="share">
    <icon name="share-alt" scale="2"></icon>
  </div>
</template>

<script>
export default {
  props: ['info'],
  computed: {
    classObject () {
      return {
        'my-share-btn': true,
        'my-share-btn-invisible': navigator.share === undefined
      }
    }
  },
  methods: {
    share () {
      console.log('invoking share functionality---with link', this.info)
      if (navigator.share) {
        console.log('navigator has web share api---')
        navigator.share({
          title: '二向箔',
          text: this.info.text,
          url: this.info.url
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
.my-share-btn
  position fixed
  right 30px
  top 20px
  z-index 9999
.my-share-btn-invisible
  display none
</style>
