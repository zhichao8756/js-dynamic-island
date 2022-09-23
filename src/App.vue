<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import FoldMessage from './components/FoldMessage.vue'
import BubbleMessage from './components/BubbleMessage.vue'
import bubbleMessage from './BubbleMessage.js'
function test() {
  bubbleMessage({
    message: '1111'
  })
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="demo-container">
    <div>
      <FoldMessage />
    </div>
    <div>
<!--      <BubbleMessage />-->
      <button @click="test">测试</button>
    </div>

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.demo-container {
  width: 1000px;
  display: flex;
  justify-content: space-around;
}
</style>
