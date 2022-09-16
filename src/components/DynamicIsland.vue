<template>
  <div class="dynamic-container ">灵动岛</div>
  <svg class="morphing-demo polymorph"></svg>
  <div>{{ isShow }}</div>
  <div>
    <button @click="showIsland">测试</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
let isShow = ref(true)
function showIsland(state) {
/*  console.log(state)
  isShow.value = !state
  console.log(isShow) */
  anime({
    targets: '.dynamic-container',
    /*translateX: [
      { value: 250, duration: 1000, delay: 500 },
      { value: 0, duration: 1000, delay: 500 }
    ],
    translateY: [
      { value: 40, duration: 500 },
      { value: 40, duration: 500, delay: 1000 },
      { value: 0, duration: 500, delay: 1000 }
    ],*/
    height: [
      { value: 40, duration: 200 },
    ],
    scaleX: [
      { value: 0, duration: 300, delay: 250, easing: 'linear' },
    ],
    scaleY: 1,
    easing: 'linear',
    duration: 300
  });
}
</script>

<style scoped>
.dynamic-container {
  background: #1a1a1a;
  width: 300px;
  height: 100px;
  border-radius: 24px;
}
</style>