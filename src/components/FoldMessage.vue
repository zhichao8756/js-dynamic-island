<template>
  <transition
    :before-enter="beforeEnter"
    :before-leave="beforeLeave"
  >
    <div
        class="dynamic-container"
        v-show="visible"
    >
      <div class="message-box">
        <div
            :class="[
          'icon',
          `icon-${type}`
        ]"
        >
        </div>
        <div class="message-text">
        <span>
          {{ message }}
        </span>
        </div>
        <slot name="operation"></slot>
      </div>

    </div>
  </transition>
  <div>
    <button @click="disappearIsland">隐藏</button>
    <button @click="showIsland">显示</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
defineOptions({
  name: 'FoldMessage'
})
// 图标映射
const typeMap = {
  success: 'success',
  error: 'error'
}

const visible = ref(true)
const message = ref('ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing')
const type = ref('error')
function beforeEnter() {
  anime({
    targets: '.dynamic-container',
    height: [
      { value: 500, duration: 150 }
    ],
    scaleX: [
      { value: 1, duration: 150, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })
}
function beforeLeave() {
  anime({
    targets: '.dynamic-container',
    scaleY: [
      { value: 0.2, duration: 200 }
    ],
    scaleX: [
      { value: 0, duration: 150, delay: 250, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })
}
function showIsland() {
  visible.value = true
}
function disappearIsland() {
  visible.value = false
  /* anime({
    targets: '.dynamic-container',
    scaleY: [
      { value: 0.2, duration: 200 }
    ],
    scaleX: [
      { value: 0, duration: 150, delay: 250, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })*/
}
</script>

<style scoped>
.dynamic-container {
  background: #1a1a1a;
  width: 300px;
  min-height: 100px;
  border-radius: 24px;
  padding: 16px;
}
.message-box {
  display: flex;
  align-items: center;
  color: #ffffff;
  height: 100%;
}
.message-text {
  width: 260px;
  margin-left: 8px;
}
.icon {
  display: inline-block;
  width: 32px;
  height: 32px;
}
.icon-error {
  background: url('../assets/error.png') no-repeat;
}
.icon-success {
  background: url('../assets/success.png') no-repeat;
}
</style>
