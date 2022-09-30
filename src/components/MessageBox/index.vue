<template>
  <div class="location">
    <div
        class="message-container"
        key="1"
        v-show="visible"
    >
      <div class="message-box">
        <div class="message-text">
          <p class="title">{{ title }}</p>
          <p class="content">{{ content }}</p>
        </div>
        <div>
          <div class="icon icon-error" @click="doCancel"></div>
          <div style="margin-left: 10px" class="icon icon-success" @click="doConfirm"></div>
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
  name: 'MessageBox'
}
</script>
<script setup>
import { nextTick, onMounted, onBeforeUnmount, ref, reactive } from 'vue'
import anime from 'animejs/lib/anime.es.js'
import { getCurrentInstance } from 'vue'
import utils from '../../utils/utils.js'

const { proxy } = getCurrentInstance()
const props = defineProps({
  title: String,
  content: String,
  onConfirm: Function,
  onCancel: Function,
  callback: Function
})
// events emit
// const emit = defineEmits(['onCancel', 'onConfirm'])

const visible = ref(true)
onMounted(async() => {
  await nextTick()
  proxy.$utils = utils
  showIsland()
})
function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: '.message-container',
      scaleY: [
        { value: 1.07, duration: 200, easing: 'easeInSine' },
        { value: 1, duration: 200, delay: 200, easing: 'easeInSine' },
        { value: 0.2, duration: 200, delay: 200, easing: 'linear' }
      ],
      scaleX: [
        { value: 1.05, duration: 200, easing: 'easeInSine' },
        { value: 1, duration: 200, delay: 200, easing: 'easeInSine' },
        { value: 0, duration: 200, delay: 400, easing: 'linear' }
      ],
      easing: 'linear',
      duration: 300
    })
    resolve()
  })
}
async function showIsland() {
  visible.value = true
  const fold = document.getElementsByClassName('message-container')[0]
  const text = document.getElementsByClassName('message-text')[0]
  fold.classList.add('animateScale')
  text.classList.add('animateText')
}
async function disappearIsland() {
  await beforeLeave()
  await proxy.$utils.sleep(1200).then((res) => {
    visible.value = false
  })
}
async function doCancel() {
  disappearIsland()
  await proxy.$utils.sleep(1200)
  props.callback && props.callback(false)
}
async function doConfirm() {
  disappearIsland()
  await proxy.$utils.sleep(2000)
  props.callback && props.callback(true)
}
</script>
<style lang="scss" scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.animateScale {
  animation: scaleIn 700ms ease-out	;
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
.message-container {
  background: #1a1a1a;
  width: 300px;
  min-height: 100px;
  border-radius: 24px;
  padding: 16px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 45%);
}
.message-box {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
}
.title {
  color: #b2b2b2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
  margin-top: 0;
}
.message-text {
  width: 200px;
  margin-left: 8px;
  color: #ffffff;
}
.icon {
  display: inline-block;
  width: 32px;
  height: 32px;
}
.icon-error {
  background: url('../../assets/error.svg') no-repeat;
}
.icon-success {
  background: url('../../assets/success.svg') no-repeat;
}
</style>
