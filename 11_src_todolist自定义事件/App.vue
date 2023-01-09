<template>
  <div class="container banner">
    <!--给myheader组件添加了一个自定义事件 addTodo ,事件回调也是addTodo-->
    <My-header @addTodo="addTodo"></My-header>
    <My-List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></My-List>
    <My-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></My-footer>

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
        // 由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中(状态提升)
       todos:JSON.parse(localStorage.getItem('todos')) || []
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
    watch:{
      todos:{
        // 开启深度监视，当对象中的属性发生变化时，也能监视
        deep:true,
        handler(value){
          // value是todos发生变化后的返回值(新的todos),todo是对象
          localStorage.setItem('todos',JSON.stringify(value))
        }
        
      }
    }
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

