<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 数据
      // ref函数加工完‘张三’存到name中，name变成了一个对象
      let name = ref('张三')
      let age = ref(18)
      let job = ref({
        type: '前端工程师',
        salary: '30k',
      })

      function changeInfo() {
        name.value = '李四'
        age.value = 19
        job.value.type = 'UI工程师'
        job.value.salary = '60k'
        console.log(name, age) //RefImpl{__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: '张三', _value: '张三'}

        // RefImpl:reference引用，implement实现，简称引用对象
      }
      // 返回一个对象
      return {
        name,
        age,
        changeInfo,
        job,
      }
    },
  }
</script>
