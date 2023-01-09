<template>
  <div>
    <!-- 点击后isShow取反 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 第一次出现也会有动画，transition标签浏览器不解析，是给vue用的，transition只能对单使用 
    对多transition-group ，且必须要有唯一的key
    -->
    <transition-group 
        name="animate__animated animate__bounce" 
        appear
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
        >
        <h1 v-show="!isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
// 引入样式不需要写from
import 'animate.css'
export default {
    name:'t-est',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h1{
        background-color: orange;
        /* 配置过渡效果 */
    }
    
    
</style>