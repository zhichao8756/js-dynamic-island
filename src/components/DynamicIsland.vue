<template>
  <div class="dynamic-container ">
    <slot name="operation"></slot>
  </div>
  <div>
    <button @click="showIsland">测试</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
defineOptions({
  name: 'MyItem'
})
const isShow = ref(true)
function showIsland(state) {
/*  console.log(state)
  isShow.value = !state
  console.log(isShow) */
  anime({
    targets: '.dynamic-container',
    height: [
      { value: 30, duration: 200 }
    ],
    scaleX: [
      { value: 0, duration: 150, delay: 250, easing: 'linear' }
    ],
    scaleY: 1,
    easing: 'linear',
    duration: 300
  })
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
