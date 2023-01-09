<template>
  <div class="container banner">
    <My-header :addTodo="addTodo"></My-header>
    <My-List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></My-List>
    <My-footer :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></My-footer>

  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'


export default {
    name:'App',
    components:{
        MyHeader,
        MyFooter,
        MyList       
    },
    data() {
      return {
       todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'喝酒',done:false},
        {id:'003',title:'开车',done:true},
       ]
      }
    },
    methods: {
      // 添加一个todo
      addTodo(todoObj){
        // 最前面追加todoObj
        this.todos.unshift(todoObj)
      },
      // 勾选或取消勾选一个todo
      checkTodo(id){
       this.todos.forEach((todo)=>{
        if(todo.id ==id){
          todo.done =!todo.done
        }
       })
      },
      // 删除todo
      deleteTodo(id){
       this.todos = this.todos.filter((todo)=> todo.id !== id) 
      },
      // 全选/取消全选
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done
        })
      },
      // 清除所有已经完成的todo
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          // 留下todo.done为false的对象
          return !todo.done
        })
      }
    },
    
}
</script>

<style>
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  li{
  list-style: none;
 }
  button{
    padding:0 10px ;
    height: 30px;
    border-radius: 5px;
    color:#fff;
    background-color: rgb(182, 42, 42);
  }
  .banner{
    width: 400px;
    margin: 0px auto;
  }
  .container{
    padding-top: 10px;
    width: 410px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>

