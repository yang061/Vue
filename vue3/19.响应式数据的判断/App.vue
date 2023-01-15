<template>
  <h3>我是app组件(祖)</h3>
</template>

<script>
  import { reactive, toRefs } from 'vue'
  import { ref } from 'vue'
  import { readonly } from 'vue'
  import { isRef } from 'vue'
  import { isReactive, isReadonly } from 'vue'
  import { isProxy } from 'vue'
  export default {
    name: 'App',

    setup() {
      let sum = ref(0)
      let car = reactive({ name: '奔驰', price: '40w' })
      let car2 = readonly(car)

      console.log(isRef(sum)) //true
      console.log(isReactive(car)) //true
      console.log(isReadonly(car2)) //true
      console.log(isProxy(car2)) //true
      console.log(isProxy(sum)) //true
      return { ...toRefs(car) } //false
    },
  }
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
