<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
   name:'S-chool',
   data() {
    return {
        name:'尚硅谷',
        address:'成都'
    }
   }, 
}
</script>

<style>
    div{
        background-color: pink;
    }
</style>