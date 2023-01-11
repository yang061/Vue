<template>
  <div><h2>我是About的内容</h2></div>
</template>

<script>
  export default {
    name: 'About',
    /*  beforeDestroy() {
      console.log('About组件即将被销毁了')
    }, */
    /* mounted() {
      console.log('About组件即将被挂载了', this)
      window.aboutRoute = this.$route
      window.aboutRouter = this.$router
    }, */
    // 通过路由规则(初始化渲染出about不算)，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
      console.log('About--beforeRouterEnter', to, from)
      if (to.meta.isAuth) {
        if (localStorage.getItem('school') == 'atguigu') {
          next()
        } else {
          alert('学校名不对，无权查看')
          // next({ name: 'guanyu' })
        }
      } else {
        next()
      }
    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
      console.log('About--beforeRouterLeave', to, from)
      next()
    },
  }
</script>

<style></style>
