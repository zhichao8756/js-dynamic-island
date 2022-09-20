<template>
  <div>
    <p>气泡消息</p>
    <div
        class="dynamic-container"
        key="1"
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

    <div>
      <button @click="disappearIsland">隐藏</button>
      <button @click="showIsland">显示</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
import { getCurrentInstance } from 'vue'

defineOptions({
  name: 'BubbleMessage'
})
const { proxy } = getCurrentInstance()

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
  return new Promise((resolve, reject) => {
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
    resolve()
  })
}
async function showIsland() {
  visible.value = true
  anime({
    targets: '.dynamic-container',
    scaleX: [
      { value: 1, duration: 150, easing: 'linear' }
    ],
    scaleY: [
      { value: 1, duration: 150, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })
  await proxy.$utils.sleep(500).then((res) => {

  })
}
async function disappearIsland() {
  await beforeLeave()
  console.log(456)
  console.log(proxy.$utils)
  await proxy.$utils.sleep(500).then((res) => {
    console.log(visible)
    visible.value = false
  })
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
  width: 200px;
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
