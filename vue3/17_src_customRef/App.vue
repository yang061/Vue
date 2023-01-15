<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
  import { customRef } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 自定义的ref--名为：myRef
      function myRef(value) {
        let timer
        // console.log('myRef', value)
        // trigger：触发 track：追踪
        return customRef((track, trigger) => {
          return {
            get() {
              console.log(`有人从myRef读取数据了，我把${value}给他`)
              track() //通知Vue追踪value的变化(提前给getter商量，让他认为value是有用的)
              return value
            },
            set(newValue) {
              console.log(`有人从myRef改数据了，${newValue}`)
              // 防抖
              clearTimeout(timer)
              timer = setTimeout(() => {
                value = newValue //value是myRef的参数
                trigger() //通知Vue去重新解析模板
              }, 500)
            },
          }
        })
      }
      // let keyWord = ref('hello') //使用Vue提高的内置的ref
      let keyWord = myRef('hello') //使用程序员自定义的ref
      return { keyWord }
    },
  }
</script>
