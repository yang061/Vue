<template>
<ul class="todo-main">    
    <transition-group name="todo" appear>
      <my-item 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
      ></my-item>
    </transition-group>
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
  .todo-enter-active{
    animation: todo 0.5s linear ;
  }
  .todo-leave-active{
    animation: todo 0.5s linear reverse;
  }
  @keyframes todo {
    from{
      /* 从右边出来 */
      transform: translateX(100%);
    }
    to{
      transform: translateX(0);
    }
  }
</style>