<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr />
</template>

<script>
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onUnmounted,
    onBeforeUnmount,
  } from 'vue'

  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)

      //   通过组合式api引用生命周期钩子
      onBeforeMount(() => {
        console.log('---onBeforeMount---')
      })
      onMounted(() => {
        console.log('---onMounted---')
      })
      onBeforeUpdate(() => {
        console.log('---onBeforeUpdate---')
      })
      onUpdated(() => {
        console.log('---onUpdated---')
      })
      onUnmounted(() => {
        console.log('---onUnmounted---')
      })
      onBeforeUnmount(() => {
        console.log('---onBeforeUnmount---')
      })
      // 返回一个对象
      return { sum }
    },
    // 通过配置项的形式使用生命周期钩子
    //#region
    /* beforeCreate() {
      console.log('---beforeCreate---')
    },
    created() {
      console.log('---created---')
    },
    beforeMount() {
      console.log('---beforeMount---')
    },
    mounted() {
      console.log('---mounted---')
    },
    beforeUnmount() {
      console.log('---beforeUnmount---')
    },
    unmounted() {
      console.log('---unmounted---')
    }, */
    //#endregion
  }
</script>
