<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 把games传给插槽使用者,可以传多个参数，所以是对象 -->
    <slot :games="games" :msg="hello">默认</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      }
    },
  }
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3 {
    text-align: center;
    background-color: orange;
  }
  img {
    display: block;
    width: 50%;
  }
</style>
