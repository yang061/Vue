<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
      </div>
</template>


<script>
// 组件交互相关的代码(数据、方法等)，引入后要暴露才能使用
/* 必须要暴露(ES6)
1.分别暴露 export const School = Vue.extend() (暴露多个的时候推荐) 引入：import {???/} from ???
2.统一暴露 export{School}         (暴露多个的时候推荐) 引入：import {???/} from ???
3.默认暴露 export default School (暴露一个的时候推荐) 引入：import ??? from ???
*/
export default {
      data() {
        return {
          name: '尚硅谷',
          address: '成都',
        }
      },
     
    }
     
</script>


<style>
/* 组件的样式 */
.demo{
    background-color: pink;
}
</style>