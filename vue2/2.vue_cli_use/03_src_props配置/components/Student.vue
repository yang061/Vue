<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学校姓名：{{ name }}</h2>
    <h2>年龄：{{ myAge+1 }}</h2>
    <button @click="updateAge">修改收到的年龄++</button>
  </div>
</template>

<script>
export default {
   name:'stu-dent',
   data() {
    return {
        msg:'我是一个尚硅谷的学生',
        myAge:this.age,
    }
   }, 
   methods: {
    updateAge(){
      this.myAge ++
    },
   },
  //  props:['name','age'], //简单声明接收，接收到的props不能改

   //  接收的同时对数据进行类型限制
   /* props:{
    name:String,
    age:Number,
   }, */

   //  接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
   props:{
    name:{
      type:String,  //name的类型是字符串
      required:true //name是必须传的
    },
    age:{
      type:Number, 
      default:99, //默认值
    },
   }
   
}
</script>

<style>
    div{
        background-color: pink;
    }
</style>