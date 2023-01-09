<template>
  <div class="school">
    <h2 >学校姓名：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>   
    <button @click="sendSchoolName">把学校名给app</button>
  </div>
</template>

<script>
export default {
   name:'s-chool',
   props:['getSchoolName'],
   data() {
    return {
        name:'尚硅谷',
        address:'成都',
    }
   }, 
   methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
   },
}
</script>

<style lang="less">
  .school{
    background-color: pink;
  }
</style>