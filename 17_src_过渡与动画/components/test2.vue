<template>
  <div>
    <!-- 点击后isShow取反 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 第一次出现也会有动画，transition标签浏览器不解析，是给vue用的，transition只能对单使用 
    对多transition-group ，且必须要有唯一的key
    -->
    <transition-group name="hello" appear>
        <h1 v-show="!isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
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
    /* 过渡效果实现动画 */
    /* 进入的起点，离开的终点 */
    .hello-enter,.hello-leave-to{
        /* -100%最右边 */
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的终点,离开的起点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
    
</style>