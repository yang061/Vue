<template>
  <Demo v-if="isShowDemo" />
  <button @click="isShowDemo = !isShowDemo">切换显示/隐藏</button>
</template>

<script>
  import { ref } from 'vue'
  import Demo from './components/Demo.vue'
  export default {
    name: 'App',
    components: { Demo },
    setup() {
      let isShowDemo = ref(true)
      return {
        isShowDemo,
      }
    },
  }
</script>
