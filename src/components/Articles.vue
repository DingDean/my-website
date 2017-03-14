<template>
  <div class="my-article">
    <div v-html="mdHtml"></div>
  </div>
</template>

<script>
export default {
  name: 'my-article',
  props: ['mdHtml']
}
</script>

<style scoped>
.my-article {width: 500px; margin-left: 0; margin-right: 0}
</style>
