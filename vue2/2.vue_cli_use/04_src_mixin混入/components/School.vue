<template>
  <div>
    <h2 @click="showName">学校姓名：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
   
  </div>
</template>

<script>
// 引入一个hunhe
// 分别暴露用{}
// import {hunhe,hunhe2} from '../mixin'
export default {
   name:'sch-ool',
   data() {
    return {
        name:'尚硅谷',
        address:'成都',
        x:111
    }
   }, 
  //  mixins:[hunhe,hunhe2]
}
</script>

<style>
    div{
        background-color: pink;
    }
</style>