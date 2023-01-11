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
      <!-- 不写include那么下面组件全部缓存(没必要),include="组件名" -->
      <!-- 只有一个想缓存的情况 -->
      <!-- <keep-alive include="News">
        <router-view></router-view>
      </keep-alive> -->
      <!-- 有8个组件，只想缓存一部分 -->
      <keep-alive :include="['News', 'Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    /* beforeDestroy() {
      console.log('Home组件即将被销毁了')
    }, */
  }
</script>

<style></style>
