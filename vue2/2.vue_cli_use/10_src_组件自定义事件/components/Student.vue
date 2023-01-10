<template>
  <div class="student">
    <h2 >学生姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>当前求和为：{{ number }}</h2>
    <button @click="add">点我number++</button>
    <button @click="sendStudentName">把学生名给app</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前的student组件的实例(vc)</button>
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
   methods: {
    sendStudentName(){
      //$emit() 触发student组件实例身上的atguigu事件
      this.$emit('atguigu',this.name,888,66,99)
      // this.$emit('demo')
    },
    // 解绑
    unbind(){
      this.$off('atguigu') //解绑一个自定义事件
      // this.$off(['atguigu','demo']) //解绑多个自定义事件
      // this.$off() //解绑所有的自定义事件
    },
    death(){
      this.$destroy() //销毁了当前的student组件的实例,销毁后所有student实例的自定义事件全都不起作用了
    },
    add(){
      console.log('app被调用了');
      this.number++
    }
   },
}
</script>

<style scoped>
.student{
  background-color: skyblue;
}
</style>