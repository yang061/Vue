<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">x++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.j1.salary }}K</h2>

  <button @click="name += '.'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
  import { toRefs, reactive, ref } from 'vue'

  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)
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
      //   person = readonly(person) //数据不能改
      //   person = shallowReadonly(person) //第一层数据不能改
      //   sum = readonly(sum)
      //   sum = shallowReadonly(sum)
      // 返回一个对象(常用)
      return {
        ...toRefs(person),
        sum,
      }
    },
  }
</script>
