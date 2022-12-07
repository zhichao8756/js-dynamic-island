<template>
  <div class="location">
    <div class="search-container">
      <div id="shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>
<script setup>

</script>
<style lang="scss" scoped>

/*body {
  min-height: 250px;
  height: 100vh;
  position: relative;
  background-color: #333;
  text-align: center;
}
*/

.search-container {
  background: #1a1a1a;
  width: 250px;
  position: relative;
  min-height: 50px;
  border-radius: 24px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 45%);
  div {
    position: absolute;
    left: 50%;
    top: 50%;
  }
  div::before,
  div::after {
    display: block;
    content: '';
    position: absolute;
  }
}
@media (max-width: 400px) {
  div:not(.no-scale) {
    transform: scale(0.8);
  }
}
#shadow {
  width: 400px;
  height: 300px;
  margin-left: -200px;
  margin-top: -150px;
  background-repeat: no-repeat;
  background-image: radial-gradient(circle, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0) 60%);
  background-position: 50% 40%;
  background-size: 13em 13em;
  animation: shadow 3s ease-in-out infinite alternate-reverse;
}
#shadow::before,
#shadow::after {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  content: '搜索中...';
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shadow 3s ease-in-out infinite alternate-reverse;
}
#shadow::before {
  margin-top: 10px;
  background-image: radial-gradient(circle, black 30%, rgba(0,0,0,0) 47%), linear-gradient(#282828, #282828);
  background-position: 50% 50%;
  background-size: 3em 3em, 100% 100%;
  filter: blur(0.07em);
}
#shadow::after {
  background-image: linear-gradient(to top, rgba(0,0,0,0.4) 37%, rgba(0,0,0,0) 46%), radial-gradient(circle, white 45%, rgba(255,255,255,0) 60%), linear-gradient(#333, #333);
  background-position: 50% 50%;
  background-size: 100% 100%, 3em 3em, 100% 100%;
}
@-moz-keyframes shadow {
  from {
    background-position: 10% 50%;
  }
  to {
    background-position: 90% 50%;
  }
}
@-webkit-keyframes shadow {
  from {
    background-position: 10% 50%;
  }
  to {
    background-position: 90% 50%;
  }
}
@-o-keyframes shadow {
  from {
    background-position: 10% 50%;
  }
  to {
    background-position: 90% 50%;
  }
}
@keyframes shadow {
  from {
    background-position: 10% 50%;
  }
  to {
    background-position: 90% 50%;
  }
}
</style>
