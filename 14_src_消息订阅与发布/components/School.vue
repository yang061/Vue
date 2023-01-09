<template>
  <div class="school">
    <h2 >学校姓名：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>   
    </div>
</template>

<script>
// pubsub是一个对象
import pubsub from 'pubsub-js'
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
    /* this.$bus.$on('hello',(data)=>{
      console.log('我是school组件',data);
    }) */
    // 订阅消息,消息名是hello
    this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
      // 不写箭头函数this是undefined
      console.log(this) //this是当前的(school)vc
      console.log('有人发布了hello消息,hello消息的回调执行了',msgName,data);
    })
    },
   beforeDestroy() {
      // this.$bus.$off('hello')
      // 取消订阅
      pubsub.unsubscribe(this.pubId)
    }
   
}
</script>

<style lang="less">
  .school{
    background-color: pink;
  }
</style>