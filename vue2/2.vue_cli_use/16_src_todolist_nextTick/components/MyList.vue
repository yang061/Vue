<template>
<ul class="todo-main"> 
    <my-item 
    v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj" 
    ></my-item>
    
 </ul>
</template>

<script>

import MyItem from './MyItem.vue'
export default {
    name:'My-list',
    components:{MyItem,},
    props:['todos'],
   
}
</script>

<style scoped>
  .todo-main{
    padding: 10px 0 50px 0;
  }  
</style>