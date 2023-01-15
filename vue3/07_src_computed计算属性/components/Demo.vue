<template>
  <h1>一个人的信息：</h1>
  姓：<input v-model="person.firstName" type="text" /> <br />
  名：<input v-model="person.lastName" type="text" /> <br />
  <span>全名:{{ person.fullName }}</span
  ><br />
  <input v-model="person.fullName" type="text" />
</template>

<script>
  import { reactive, computed } from 'vue'
  export default {
    name: 'Demo',
    /* // vue2的计算属性
      computed: {
        fullName() {
          return this.person.firstName + '-' + this.person.lastName
        },
      }, */
    setup() {
      // 数据
      let person = reactive({
        firstName: '张',
        lastName: '三',
      })

      //   vue3计算属性--简写(没有考虑改,只考虑读)
      /* person.fullName = computed(() => {
          return person.firstName + '-' + person.lastName
        }) */

      //   vue3计算属性--完整写法(考虑读和写)
      person.fullName = computed({
        get() {
          return person.firstName + '-' + person.lastName
        },
        set(value) {
          const nameArr = value.split('-') //转换为数组
          person.firstName = nameArr[0]
          person.lastName = nameArr[1]
        },
      })

      // 返回一个对象
      return {
        person,
      }
    },
  }
</script>
