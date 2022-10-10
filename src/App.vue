<script setup>
import { FoldMessage, BubbleMessage, MessageBox, ProgressBox, Rate } from '@/components/index.js' // 导入
// import RateBox from '@/components/Rate/index.vue'

function testBubble() {
  BubbleMessage({
    user: 'zack',
    message: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing',
    avatar: 'https://joeschmoe.io/api/v1/random',
    type: 'success'
  })
}
function fold() {
  FoldMessage({
    message: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing',
    type: 'success'
  })
}
function box() {
  MessageBox({
    title: 'This is a title',
    content: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing'
  }).then(() => {
    console.log('confirm')
  }).catch(() => {
    console.log('cancel')
  })
}
function progress() {
  ProgressBox({
    loadingTime: 3000
  }).then(() => {
    console.log('done')
  })
}
function like() {
  Rate({
    title: '点个赞吧'
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
  <button @click="fold">测试折叠</button>
  <button @click="testBubble">测试气泡</button>
  <button @click="box">测试弹框</button>
  <button @click="progress">测试进度</button>
  <button @click="like">点个赞吧</button>
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
