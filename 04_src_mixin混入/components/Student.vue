<template>
  <div>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
   
  </div>
</template>

<script>
// 
// import {hunhe} from '../mixin'
export default {
   name:'stu-dent',
   data() {
    return {
        name:'小明',
        age:18,
    }
   }, 
  //  mixins:[hunhe]
}
</script>

<style>
    div{
        background-color: pink;
    }
</style>