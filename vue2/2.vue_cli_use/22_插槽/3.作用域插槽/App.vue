<template>
  <div class="container">
    <Category title="游戏">
      <template scope="atguigu">
        <!-- {{ atguigu }} //{ "games": [ "红色警戒", "穿越火线", "劲舞团", "超级玛丽" ] } -->
        <ul>
          <li v-for="(game, index) in atguigu.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 解构赋值 ，slot-scope(新api) scope(旧api)-->
      <template slot-scope="{ games }">
        <ol>
          <li v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{games}">
        <h4 v-for="(game, index) in games" :key="index">
          {{ game }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
    name: 'App',
    components: { Category },
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
