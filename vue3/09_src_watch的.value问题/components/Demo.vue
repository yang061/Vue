<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪水：{{ person.job.j1.salary }}K</h2>

  <button @click="person.name += '.'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
  import { ref, watch } from 'vue'

  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)
      let msg = ref('你好')
      let person = ref({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      })
      //   sum存储的是基本类型，不用.value
      watch(sum, (newValue, oldValue) => {
        console.log('sum的值变化了', newValue, oldValue)
      })

      //   person.value;监视的是reactive所定义的数据(深层次的；自动开启深度监视)
      /*  watch(person.value, (newValue, oldValue) => {
        console.log('person的值变化了', newValue, oldValue)
      }) */

      //   ref定义的数据，开启深度监视，不用加.value
      watch(
        person,
        (newValue, oldValue) => {
          console.log('person的值变化了', newValue, oldValue)
        },
        { deep: true }
      )
      // 返回一个对象
      return {
        sum,
        msg,
        person,
      }
    },
  }
</script>
