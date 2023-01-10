<template>
  <div class="student">
    <h2 >学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生名给school组件</button>
  </div>
</template>

<script>

export default {
   name:'s-tudent',
   data() {
    return {
        name:'小明',
        age:18,
        number:0
    }
   }, 
   mounted() {
    // console.log('student',this.$bus)
   },
   methods: {
    // 回调函数
    sendStudentName(){
      this.$bus.$emit('hello',this.name)
    }
   },
}
</script>

<style scoped>
.student{
  background-color: skyblue;
}
</style>