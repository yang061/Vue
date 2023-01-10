<template>
  <div class="school">
    <h2 >学校姓名：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>   
    </div>
</template>

<script>
export default {
   name:'s-chool',
   data() {
    return {
        name:'尚硅谷',
        address:'成都',
    }
   }, 
   mounted() {
    // console.log('school',this.$on)
    // 绑定自定义事件
    this.$bus.$on('hello',(data)=>{
      console.log('我是school组件',data);
    })
   
    },
   beforeDestroy() {
      this.$bus.$off('hello')}
   
}
</script>

<style lang="less">
  .school{
    background-color: pink;
  }
</style>