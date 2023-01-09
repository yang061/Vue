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
    <span v-show="!todo.isEdit">{{ todo.title }}</span>
    <input   
    type="text"
    v-show="todo.isEdit" 
    :value="todo.title"
    @blur="handleBlur(todo,$event)"
    ref="inputTitle"
    >
    <button class="btn btn-danger"  @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
   </li>
</template>

<script>
import PubSub from 'pubsub-js';
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
        // this.$bus.$emit('deleteTodo',id)
        // 消息发布
        PubSub.publish('deleteTodo',id)
      }
    },   
    handleEdit(todo){
      // Object.hasOwn(对象名,'属性名') 判断对象里面是否有某个属性，返回值为布尔值
      if(Object.hasOwn(todo,'isEdit')){
        todo.isEdit = true
      }else{
        // console.log('todo')
        this.$set(todo,'isEdit',true) 
      }
      // 不执行，因为要handleEdit里面的代码全部执行完才会去重新解析模板，所以执行下面的代码时，input框还未被解析(被隐藏了)，所以不生效。解决方法可以通过定时器，或$nextTick()【nextTick指定的回调会在dom节点更新后执行
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点回调(真正执行修改逻辑)
    handleBlur(todo,e){
      todo.isEdit = false
      // console.log('updateTodo',todo.id,e.target.value)
      if(!e.target.value.trim()){
        return alert('输入不能为空')
      }
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
    },
    
   

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