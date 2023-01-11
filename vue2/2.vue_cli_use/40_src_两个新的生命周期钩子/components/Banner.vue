<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go(2)">测试一下go</button>
    </div>
  </div>
</template>

<script>
  // 一般组件
  export default {
    name: 'Banner',
    methods: {
      back() {
        // console.log(this.$router)
        this.$router.back()
      },
      forward() {
        // console.log(this.$router)
        this.$router.forward()
      },
      go(n) {
        this.$router.go(n)
      },
    },
  }
</script>

<style></style>
