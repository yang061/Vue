<template>
  <h2>我是Home的内容</h2>
</template>

<script>
  export default {
    name: 'Home',
    /* beforeDestroy() {
      console.log('Home组件即将被销毁了')
    }, */
    mounted() {
      console.log('Home组件即将被挂载了', this)
      // HomeRoute 和AboutRoute 不一样
      // HomeRouter 和AboutRouter 一样(只有一个路由器)
      window.HomeRoute = this.$route
      window.HomeRouter = this.$router
    },
  }
</script>

<style></style>
