<template>
  <Demo @hello="showHelloMsg" msg="你好" school="尚硅谷">
    <template v-slot:qwe>
      <span>尚硅谷</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo.vue'
  export default {
    name: 'App',
    components: { Demo },
    setup() {
      function showHelloMsg(value) {
        alert(`你好啊,你触发了hello事件,收到的参数是${value}`)
      }
      return {
        showHelloMsg,
      }
    },
  }
</script>
