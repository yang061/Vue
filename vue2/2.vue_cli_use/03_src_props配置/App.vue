<template>
  <div>
    <!-- 加冒号了引号里面当js表达式 -->
    <Student name="李四" :age='42'></Student>
    <hr>
  </div>
</template>

<script>
// 引入Student组件
import Student from './components/Student'

export default {
    name:'App',
    components:{       
        Student,
    },
    data(){
       return {msg:'哈哈'}
    },   
    
}
</script>

<style>

</style>