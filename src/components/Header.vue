<template>
  <div id='my-header'>
    <h1 id="my-title">二向箔</h1>
    <div id="my-desc">
      <p>现实坍缩于网络</p>
    </div>
  </div>
</template>

<script>
export default {
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
  animation: slidein 1s 1;
  margin: 0 auto;
  font-size: 65px;
  line-height: 0.9;
}

#my-desc {
  text-align: center;
  margin: 15px auto;
}

#my-desc p {
  margin: 0 auto;
}
</style>
