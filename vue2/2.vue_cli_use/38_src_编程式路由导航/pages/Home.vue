<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <!-- 子路由里面路径要带父路径 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    /* beforeDestroy() {
      console.log('Home组件即将被销毁了')
    }, */
    /* mounted() {
      console.log('Home组件即将被挂载了', this)
      // HomeRoute 和AboutRoute 不一样
      // HomeRouter 和AboutRouter 一样(只有一个路由器)
      window.HomeRoute = this.$route
      window.HomeRouter = this.$router
    }, */
  }
</script>

<style></style>
