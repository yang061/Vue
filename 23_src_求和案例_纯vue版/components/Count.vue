<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
  export default {
    name: 'count',
    data() {
      return {
        sum: 0, //当前的和
        num: 1, //用户选择的数字
      }
    },
    methods: {
      increment() {
        /* num转换为数字，
         1.num前加+，
         2.<option :value="1">1</option> value前加“：”，这样引号里面变js表达式
         3.v-model后面加 ".number"
         */
        this.sum += this.num
      },
      decrement() {
        this.sum -= this.num
      },
      incrementOdd() {
        // 0是false 1是true
        if (this.sum % 2) {
          this.sum += this.num
        }
      },
      incrementWait() {
        setTimeout(() => {
          this.sum += this.num
        }, 1000)
      },
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
