<template>
  <div class="todo-header banner">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认:" v-model="title"  @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'My-header',
    data() {
      return {
        title:''
      }
    },
    methods: {
      add(){
        // 非空判断,校验数据(去除空格)
        if(!this.title.trim()){
          return alert('输入不能为空')
        }
        /* 
        获取当前输入框数据：方法1 ：e.target.value
        获取当前输入框数据：方法2 ：双向绑定(v-model)，但是需要在data里面配置属性 */

        // 将用户的输入包装为todo对象(不能重复的设置id=>nanoid(精简)=>uuid(完整))
        const todoObj ={id:nanoid(),title:this.title,done:false}
        // 通知App组件去添加一个todo对象
        this.$emit('addTodo',todoObj)
        // 清空输入
        this.title = ''
      }
    },
}
</script>

<style lang="less" scoped>
  .todo-header{
    width: 400px;
    height: 30px;
    input{
      padding: 8px;
      margin-bottom: 10px;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      outline-style: none;
      border: 1px solid #ccc;
      &:hover{
        border: 1px solid skyblue;
      }
    }
   
  }
</style>