<template>
  <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
    <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
  </svg>
</template>

<script>
  export default {}
</script>

<style scoped>
.spinner {
  animation: rotator 1.4s linear infinite;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  margin: auto;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: 188;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
  dash 1.4s ease-in-out infinite,
  colors 5.6s ease-in-out infinite;
}

@keyframes colors {
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
}

@keyframes dash {
  0% { stroke-dashoffset: 188; }
  50% {
    stroke-dashoffset: 47;
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: 188;
    transform:rotate(450deg);
  }
}
</style>
