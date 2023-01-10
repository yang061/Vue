<template>
  <div class="test">
    <h2 >学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
   
  </div>
</template>

<script>

export default {
   name:'stu-dent',
   data() {
    return {
        name:'小明',
        age:18,
    }
   }, 
  
}
</script>

<style scoped>
.test{
  background-color: skyblue;
}
</style>