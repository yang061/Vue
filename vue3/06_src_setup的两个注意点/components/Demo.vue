<template>
  <h1>一个人的信息：</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test1">测试一下Demo组件的hello事件</button>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    name: 'Demo',
    props: ['msg', 'school'],
    emits: ['hello'], //父组件绑定自定义事件需要告诉子组件
    setup(props, context) {
      // 数据
      let person = reactive({
        name: '张三',
        age: 18,
      })
      //   方法
      function test1() {
        context.emit('hello', 666)
      }

      //   console.log('---setup---', this) //this是undefined
      //   console.log('---setup---', props)
      console.log('---setup---', context)
      //   console.log('---setup---', context.attrs) //相当于vue2中的this.$attrs
      //   console.log('---setup---', context.emit) //触发自定义事件
      console.log('---setup---', context.slots) //插槽
      // 返回一个对象
      return {
        person,
        test1,
      }
    },
  }
</script>
