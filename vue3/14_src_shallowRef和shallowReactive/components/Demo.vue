<template>
  <h4>当前的x是：{{ x.y }}</h4>
  <button @click="x = { y: 888 }">点我替换x</button>
  <button @click="x.y++">x++</button>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.j1.salary }}K</h2>
  <h4>p{{ person }}</h4>

  <button @click="name += '.'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
  import { toRefs, reactive, shallowRef } from 'vue'

  export default {
    name: 'Demo',
    setup() {
      // 数据

      //   let x = ref({ y: 0 })
      let x = shallowRef({ y: 0 })
      console.log(x)
      // let person = shallowReactive({ //只考虑第一层的响应式
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      })

      // 返回一个对象(常用)
      return {
        person,
        ...toRefs(person),
        x,
      }
    },
  }
</script>
