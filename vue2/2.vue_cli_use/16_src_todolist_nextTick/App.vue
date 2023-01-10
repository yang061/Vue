<template>
  <div class="container banner">
    <!--给myheader组件添加了一个自定义事件 addTodo ,事件回调也是addTodo-->
    <My-header @addTodo="addTodo"></My-header>
    <My-List :todos="todos" ></My-List>
    <My-footer :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></My-footer>

  </div>
</template>

<script>
import PubSub from 'pubsub-js'
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
      // 更新todo
      updateTodo(id,newVale){
       this.todos.forEach((todo)=>{
        if(todo.id ==id){
          todo.title = newVale
        }
       })
      },
      // 删除todo
      deleteTodo(_,id){
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
    },
    mounted() {
      // 调用checkTodo函数
      this.$bus.$on('checkTodo',this.checkTodo)
      // 调用deleteTodo函数
      // this.$bus.$on('deleteTodo',this.deleteTodo)

      // 消息订阅
      // 因为会收到两个参数，所以函数要使用【_】占位
      this.pubId = PubSub.subscribe('deleteTodo',this.deleteTodo)

      // 更新数据
      this.$bus.$on('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
      // 销毁前解绑事件
      this.$bus.$off(['checkTodo'])
      // this.$bus.$off(['deleteTodo'])
      PubSub.unsubscribe(this.pubId)
      this.$bus.$off('updateTodo')
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
  .btn{
    padding:0 10px ;
    height: 30px;
    border-radius: 5px;
    
  }
  .btn-danger{
    color:#fff;
    background-color: rgb(182, 42, 42);
    border: 1px solid rgb(180, 47, 47);
  }
  .btn-edit{
    margin-right: 5px;
    background-color: skyblue;
    color: #fff;
    border: 1px solid rgb(114, 175, 199);
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

