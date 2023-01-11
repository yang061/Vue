<template>
  <div>
    <div class="row">
      <Banner />
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- 借助vue-router把router-link 转成a标签,实现路由的切换,active-class展示处于该页面的样式 -->
          <!-- <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          > -->
          <router-link
            class="list-group-item"
            replace
            active-class="active"
            :to="{ name: 'guanyu' }"
            >About</router-link
          >
          <router-link
            class="list-group-item"
            replace
            active-class="active"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 这里展示什么组件要看用户点击哪个导航项 -->
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from './components/Banner.vue'
  export default {
    name: 'App',
    // 一般组件
    components: { Banner },
    data() {
      return {}
    },
  }
</script>
