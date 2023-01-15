<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <button @click="sayHello">说话--vue3</button>
  <button @click="test1">测试一下--vue3中能否读取vue2的数据</button>
  <br /><br />
  <button @click="seyWelcome">说话--vue2</button>
  <button @click="test1">测试一下--vue2中能否读取vue3的数据</button>
</template>

<script>
  // 引入渲染函数
  // import { h } from 'vue'
  export default {
    name: 'App',

    data() {
      return {
        sex: '男',
      }
    },
    methods: {
      seyWelcome() {
        alert('欢迎来到尚硅谷学习')
      },
      test1() {
        console.log(this.name)
        console.log(this.age)
        console.log(this.sex)
        console.log(this.sayHello())
      },
    },
    // 此处只是测试一下setup，暂时不考虑响应式
    setup() {
      // 数据
      let name = '张三'
      let age = 18

      // 方法
      function sayHello() {
        alert(`我叫${name},${age}岁了`)
      }
      function test2() {
        console.log(name)
        console.log(age)
        console.log(sayHello())
        console.log(this.sex)
      }

      // 返回一个对象
      return {
        name,
        age,
        sayHello,
        test2,
      }

      // 返回一个函数(渲染函数)
      /*  return () =>
          // h('要放到页面上的元素','要放到页面上的元素的内容')
          h('h1', '尚硅谷') */
    },
  }
</script>
