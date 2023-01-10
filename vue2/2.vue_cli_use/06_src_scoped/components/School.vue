<template>
  <div class="demo">
    <h2 >学校姓名：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>   
  </div>
</template>

<script>
export default {
   name:'sch-ool',
   data() {
    return {
        name:'尚硅谷',
        address:'成都',
        x:111
    }
   }, 
}
</script>

<style lang="less">
  .demo{
    background-color: pink;
  }
</style>