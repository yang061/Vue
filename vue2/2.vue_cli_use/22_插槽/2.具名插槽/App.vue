<template>
  <div class="container">
    <!-- 样式写在app.vue里面，那解析完了再传过去，如果没有就只传结构过去 -->
    <Category title="美食">
      <img
        slot="center"
        src="./assets/images/u=3131691188,3698349746&fm=253&fmt=auto&app=138&f=JPEG.webp"
        alt="" />
      <a slot="footer" href="http://atguigu.com">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://atguigu.com">网络游戏</a>
        <a href="http://atguigu.com">单机游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://atguigu.com">经典</a>
          <a href="http://atguigu.com">热门</a>
          <a href="http://atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
    name: 'App',
    components: { Category },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
      }
    },
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }

  video {
    width: 100%;
  }
  .foot {
    display: flex;
    justify-content: space-around;
  }
  h4 {
    text-align: center;
  }
</style>
