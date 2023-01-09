<template>
  <div>
    <h1>{{ msg }},学生姓名是：{{ studentName }}</h1>
    <!-- 由于v-on在student组件标签上，所以是给student组件的实例对象vc绑定了atguigu事件，如果以后有人触发了这个事件(atguigu),demo函数就会被调用  -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用@或v-on)-->
    <!-- <student v-on:atguigu="getStudentName" @demo="m1"></student> <hr> -->
    
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法:使用ref,更灵活)-->
    <student ref="student" @click.native="show"></student> <hr>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
    <School :getSchoolName="getSchoolName"></School>
    <hr>
  </div>
</template>

<script>
import School from './components/School.vue'
// 引入Student组件
import Student from './components/Student'

export default {
    name:'App',
    components:{       
        Student,
        School
        
    },
    data(){
       return {
        msg:'哈哈',
        studentName:''
      }
    },   
    methods: {
      getSchoolName(name){
        console.log('app收到了学校名!',name);
      },
      getStudentName(name,...params){
        console.log('app收到了学生名!',name,params);
        this.studentName = name
      },
      m1(){
      console.log('demo被触发了');
      },
      show(){
        alert(111)
      }
    },
    mounted() {
      setTimeout(()=>{   
        this.$refs.student.$on('atguigu',this.getSchoolName) //绑定自定义事件
        // this.$refs.student.$once('atguigu',this.getSchoolName) //绑定自定义事件(一次性)
      },3000)
    },
    
}
</script>

<style>

</style>
