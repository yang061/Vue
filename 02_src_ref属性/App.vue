<template>
  <div>
    <School ref="sch"/>
    <School id="sch"/>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我展示上面的dom</button>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School'

export default {
    name:'App',
    components:{       
        School,
    },
    data(){
       return {msg:'哈哈'}
    },   
    methods: {
        showDom(){
            // console.log(this.msg)
            // 展示整个标签，给哪个标签加ref，vc组件实例对象就帮你收集哪个元素
            // console.log(this.$refs.title) //真实dom元素
            // console.log(this.$refs.sch) //school组件的实例对象(vc)
            console.log(document.querySelector('#sch')) //school组件对应的完整dom结构
        }
    },
}
</script>

<style>

</style>