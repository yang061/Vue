<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作种类：{{ person.job.type }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>测试信息：{{ person.job.a.b.c }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 数据
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          type: '前端工程师',
          salary: '30k',
          a: {
            b: {
              c: 666,
            },
          },
        },
        // 处理数组
        hobby: reactive(['抽烟', '喝酒', '烫头']),
      })
      // 方法
      function changeInfo() {
        person.name = '李四'
        person.age = 19
        // 使用了ref 后
        /* job.value.type = 'UI工程师'
        job.value.salary = '60k' */
        // 使用了reactive 后
        person.job.type = 'UI工程师'
        person.job.salary = '60k'
        person.job.a.b.c = 999
        // console.log(name, age)
        // 处理数组上的数据
        person.hobby[1] = '学习'
        // RefImpl:reference引用，implement实现，简称引用对象
      }
      // 返回一个对象
      return {
        person,
        changeInfo,
      }
    },
  }
</script>
