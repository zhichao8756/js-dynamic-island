<template>
  <div class="location">
    <div
        class="fold-container"
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
<!--    <div style="margin-top: 20px">
      <button @click="disappearIsland">隐藏</button>
      <button @click="showIsland">显示</button>
    </div>-->
  </div>

</template>
<script>
export default {
  name: 'FoldMessage'
}
</script>
<script setup>
import { nextTick, onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
import { getCurrentInstance } from 'vue'
import utils from '../../utils/utils.js'

const { proxy } = getCurrentInstance()
const props = defineProps({
  message: String,
  type: String
})
// 图标映射

const visible = ref(true)
onMounted(async() => {
  await nextTick()
  proxy.$utils = utils
  showIsland()
})
function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: '.fold-container',
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
  const fold = document.getElementsByClassName('fold-container')[0]
  const text = document.getElementsByClassName('message-text')[0]
  fold.classList.add('animateScale')

  text.classList.add('animateText')

  /* anime({
    targets: '.bubble-container',
    scaleX: [
      { value: 0, duration: 150, easing: 'linear' }
      { value: 1, duration: 150, delay: 1000, easing: 'linear' }
    ],
    scaleY: [
      { value: 0, duration: 150, easing: 'linear' }
      { value: 1, duration: 150, delay: 1000, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })*/
  /* anime({
    targets: '.fold-container',
    scaleX: [
      { value: 1, duration: 150, easing: 'linear' }
    ],
    scaleY: [
      { value: 1, duration: 150, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })*/
  /* anime({
    targets: '.fold-container',
    scaleX: [
      { value: 0, duration: 150, easing: 'linear' },
      { value: 1, duration: 150, delay: 150, easing: 'linear' }
    ],
    scaleY: [
      { value: 0, duration: 150, easing: 'linear' },
      { value: 1, duration: 150, delay: 1000, easing: 'linear' }
    ],
    easing: 'linear',
    duration: 300
  })*/
  await proxy.$utils.sleep(2000)
  disappearIsland()
}
async function disappearIsland() {
  await beforeLeave()
  await proxy.$utils.sleep(500).then((res) => {
    visible.value = false
  })
}
</script>
<style lang="scss" scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}
.animateScale {
  animation: scaleIn 600ms linear;
}
@keyframes messageFilter {
  0% {
    transform: scale(0);
    transform: translateY(-20px);
    filter: blur(10px);
  }
  100% {
    transform: scale(1);
  }
}
.animateText {
  animation: messageFilter 800ms linear;

}
.fold-container {
  background: #1a1a1a;
  width: 300px;
  min-height: 100px;
  border-radius: 24px;
  padding: 16px;
}
.message-box {
  display: flex;
  align-items: center;

  height: 100%;
}
.message-text {
  width: 260px;
  margin-left: 8px;
  color: #ffffff;
}
.icon {
  display: inline-block;
  width: 32px;
  height: 32px;
}
.icon-error {
  background: url('../../assets/error.png') no-repeat;
}
.icon-success {
  background: url('../../assets/success.png') no-repeat;
}
</style>
