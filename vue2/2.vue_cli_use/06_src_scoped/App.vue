<template>
  <div>
    <student></student> <hr>
    <School></School>
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
       return {msg:'哈哈'}
    },   
    
}
</script>

