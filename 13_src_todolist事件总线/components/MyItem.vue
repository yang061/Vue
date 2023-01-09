<template>
   <li class="item banner">
    <input 
    type="checkbox" 
    :checked="todo.done" 
    @click="handleCheck(todo.id)"
    >
    <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
    <!-- <input 
    type="checkbox" 
    v-model="todo.done"
    > -->
    <span>{{ todo.title }}</span>
    <button @click="handleDelete(todo.id)">删除</button>
   </li>
</template>

<script>
export default {
  name:'My-item',
  // 声明接收toDo对象
  props:['todo'],
  methods:{
    // 勾选/取消勾选
    handleCheck(id){
      // 通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    // 删除
    handleDelete(id){
      if(confirm('确认删除吗')){
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo',id)
      }
    }
  }
}
</script>

<style scoped>
  li.item{
    margin-bottom: 5px;
    padding-left: 10px;
    border: 1px solid #ccc;
    width: 400px;
    height: 30px;
    border-radius: 5px;
    line-height: 28px;
  }
  li.item:hover{
    background-color: #ccc;
  }
  button{
    float: right;
    display: none;
  }
  button:hover{
    color: #ccc;
  }
  li.item:hover button{
    display: block;
  }
  span{
    margin: 0 4px;
  }
</style>