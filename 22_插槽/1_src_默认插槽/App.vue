<template>
  <div class="container">
    <!-- 样式写在app.vue里面，那解析完了再传过去，如果没有就只传结构过去 -->
    <Category title="美食" :listData="foods">
      <img
        src="./assets/images/u=3131691188,3698349746&fm=253&fmt=auto&app=138&f=JPEG.webp"
        alt="" />
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
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
</style>
