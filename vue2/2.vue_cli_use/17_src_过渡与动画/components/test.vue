<template>
  <div>
    <!-- 点击后isShow取反 -->
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 第一次出现也会有动画，transition标签浏览器不解析，是给vue用的 -->
    <transition name="hello" appear>
        <h1 v-show="isShow" >你好啊</h1>
    </transition>
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
    }
    .hello-enter-active{
        animation: atguigu linear 1s;
    }
    .hello-leave-active{
        animation: atguigu 1s linear reverse;
    }
    @keyframes atguigu{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>