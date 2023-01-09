<template>
  <div class="todo-footer banner" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll">  -->
      <input type="checkbox" v-model="isAll"> 
        <span>已完成：{{doneTotal}}</span>/
        全部：{{total}}
    </label>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>

  </div>
</template>

<script>

export default {
    name:'My-footer',
    props:['todos',],
    data(){
      return {
        complete:1,       
      }
    },
    computed:{
      total(){ 
        return this.todos.length
      },
      doneTotal(){
       /*  普通方法  
        let i =0
        this.todos.map((item)=>{
        if(item.done){
            i++
          }
        })
        return i */

        // reduce 条件统计  pre是初始值0，第二次调用函数的pre是第一次调用函数的返回值,最后一次的pre的值为当前函数返回值；current是当前数据(todo项)
        /* const x = this.todos.reduce((pre,current)=>{
          return pre + (current.done ? 1 : 0)
        },0)
        console.log(x) */
        return this.todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0)
        ,0)
      },
      // 简写，只被读取不被修改
      isAll:{
        get(){
           // 总数大于0且总数和完成任务相同
          return this.total === this.doneTotal && this.total > 0
        },
        set(value){
          // value是布尔值，选中checkbox就是true，反之，false
          // this.checkAllTodo(value)
          this.$emit('checkAllTodo',value)
        }
       
      }
    },
    methods: {
      /* checkAll(e){
        this.checkAllTodo(e.target.checked)
      } */
      clearAll(){
        if(confirm('确认清除已完成任务吗?')){
          // this.clearAllTodo()
          this.$emit('clearAllTodo')
        }
      }
    },
   
}
</script>

<style lang="less" scoped>
  .todo-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 8px;
    width: 400px;
    height: 50px;
    border-radius: 5px;
    span{
      margin-left: 20px;
    }
  }
</style>