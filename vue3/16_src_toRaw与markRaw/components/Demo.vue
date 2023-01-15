<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">x++</button>
  <hr />
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪水：{{ job.j1.salary }}K</h2>
  <h3 v-show="person.car">汽车：{{ person.car }}w</h3>

  <button @click="name += '.'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showPerson">展示最原始的person</button>
  <button @click="addCar">给人添加一个车</button>
  <button @click="person.car.name = '奥迪'">换车名</button>
  <button @click="changePrice">换价格</button>
</template>

<script>
  import { toRefs, reactive, ref } from 'vue'
  import { markRaw } from 'vue'

  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20,
          },
        },
      })
      function showPerson() {
        // const p = toRaw(person) //p是普通对象，不是响应式
        // p.age++
        // console.log(p)
        // 下面代码会报错，toRaw只能用于reactive所缔造的数据
        /*  const sum = toRaw(sum)
        console.log(sum) */
      }

      function addCar() {
        let car = { name: '奔驰', price: '40' }
        person.car = markRaw(car) //把car变成普通数据，不带响应式
      }
      function changePrice() {
        person.car.price++
        console.log(person.car.price) //数据在变，但页面不更新
      }
      // 返回一个对象(常用)
      return {
        ...toRefs(person),
        sum,
        showPerson,
        addCar,
        person,
        changePrice,
      }
    },
  }
</script>
