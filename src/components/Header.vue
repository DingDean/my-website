<template>
  <div id='my-header'>
    <h1 id="my-title">二向箔</h1>
    <div id="my-desc">
      <p>嘿,你好,我是丁科,这片二向箔的管理员.</p>
      <p>二向箔是我与你连接的纽带,是实体世界坍塌为网络世界的缘起.</p>
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
  margin: 1rem auto;
  max-width: 48rem;
  max-height:14rem;
}

#my-title {
  text-align: center;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  animation: slidein 1s 1;
}

#my-desc {
  text-align: center;
}

@keyframes slidein {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 100%;
  }
}
</style>
