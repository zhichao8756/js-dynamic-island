<template>
  <div class="location">
    <!-- 粘滞效果   -->
    <svg width="0" height="0" style="position:absolute;">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
        </filter>
      </defs>
    </svg>
    <div
        class="bubble-container"
        key="1"
        v-show="visible"
    >
      <div class="message-box">
        <div
            class="avatar"
            :style="{background: randomBg(), borderRadius: '50%'}"
        >
          <img
              class="avatar-container"
              v-if="avatar"
              :src="avatar"
              alt=""
          >
          <span v-else>{{ getUserName(user) }}</span>
        </div>
        <div class="message-text">
        <span>
          {{ message }}
        </span>
        </div>
      </div>
      <!-- 状态栏  -->
      <div class="status-container" >
        <svg v-if="type === 'success'" class="checkmark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
          <circle ref="path" class="circle path" cx="16" cy="16" r="16" stroke="#0c3" stroke-width="3" />
          <path  ref="path" class="check path" d="M9 16l5 5 9-9" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"></path>
        </svg>
        <div v-if="type === 'error'">
          <svg style="margin-top: 6px" class="checkmark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
            <circle ref="path" class="circle path" cx="16" cy="16" r="16" stroke="#d81e06" stroke-width="3" />
            <g ref="path" class="check path">
              <line x1="8" y1="8" x2="22" y2="22" data-v-f6bb0465="" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"></line>
              <line x1="22" y1="8" x2="8" y2="22" data-v-f6bb0465="" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"></line>
            </g>
          </svg>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'BubbleMessage'
}
</script>
<script setup>
import { ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
import { getCurrentInstance } from 'vue'
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import utils from '../../utils/utils.js'

const props = defineProps({
  type: String,
  user: String,
  message: String,
  avatar: String
})
const { proxy } = getCurrentInstance()

const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']

const visible = ref(false)
const statusVisible = ref(false)
onMounted(async() => {
  await nextTick()
  proxy.$utils = utils
  showIsland()
})

function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: '.bubble-container',
      scaleY: [
        { value: 0.2, duration: 200, delay: 200 }
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
function randomBg() {
  const min = 0
  const max = 3
  const rand = Math.floor(Math.random() * (max - min + 1)) + min
  return colorList[rand]
}
async function showIsland() {
  visible.value = true
  // const bubble = document.getElementsByClassName('bubble-container')[0]
  // bubble.style.scaleX = 0
  // bubble.style.scaleY = 0
  const bubble = document.getElementsByClassName('bubble-container')[0]
  const text = document.getElementsByClassName('message-text')[0]
  bubble.classList.add('animateScale')
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
  const check = document.getElementsByClassName('check')[0]
  const circle = document.getElementsByClassName('circle')[0]
  if (props.type === 'success') {
    check.style.strokeDasharray = 20
    check.style.strokeDashoffset = 20
  }
  circle.style.strokeDasharray = 99
  circle.style.strokeDashoffset = 99
  await proxy.$utils.sleep(100)
  anime({
    targets: '.status-container',
    translateX: [
      { value: 65, duration: 500, easing: 'easeInCubic' },
      { value: 0, duration: 350, delay: 1500, easing: 'linear' }
    ],
    easing: 'linear'
  })
  await proxy.$utils.sleep(1000)
  drawCircle()
  await proxy.$utils.sleep(2000)
  disappearIsland()
}
function drawCircle() {
  /* const checkTimeline = anime.timeline(
    { autoplay: true, direction: 'alternate', loop: false }
  )
  checkTimeline.add(
    {
      targets: '.checkmark',
      scale: [{ value: [0, 1], duration: 600, easing: 'easeOutQuad', delay: 350 }] }
  )*/
  anime({
    targets: '.check',
    strokeDasharray: anime.setDashoffset,
    /* strokeDasharray: [
      { value: 314, duration: 350, easing: 'linear' },
      { value: 0, duration: 350, delay: 350, easing: 'linear' }
    ],*/
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  })
  anime({
    targets: '.circle',
    strokeDasharray: anime.setDashoffset,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: false
  })
}
async function disappearIsland() {
  await beforeLeave()
  await proxy.$utils.sleep(500).then((res) => {
    visible.value = false
    statusVisible.value = false
  })
}
function getUserName(name) {
  return name.substring(0, 1)
}
onBeforeUnmount(() => {
  disappearIsland()
})
</script>

<style lang="scss" scoped>
@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.animateScale {
  animation: scaleIn 300ms linear;
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
.bubble-container {
  background: #1a1a1a;
  width: 250px;
  border-radius: 15px;
  padding: 8px 12px;
  filter: url("#goo");
}
.message-box {
  display: flex;
  align-items: center;
  color: #ffffff;
  height: 100%;
}
.message-text {
  width: 180px;
  margin-left: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.avatar {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 25px;
}
.avatar-container {
  width: 100%;
  height: 100%;
}
.status-container {
  width: 35px;
  height: 35px;
  background: #1a1a1a;
  position: absolute;
  right: 10px;
  top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.path {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
}
.circle {
  stroke-dasharray: 99;
  stroke-dashoffset: 99;
}
/*.check {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 10s linear forwards;
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}*/
.icon {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 9px;
  left: 10px;
}
.icon-error {
  background: url('../assets/error.png') no-repeat;
  background-size: 100% 100%;
}
.icon-success {
  background: url('../assets/success.png') no-repeat;
  background-size: 100% 100%;
}
</style>
