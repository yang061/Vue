<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h3>当前求和放大10倍为：{{ $store.getters.bigSum }}</h3>
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
        num: 1, //用户选择的数字
      }
    },
    methods: {
      increment() {
        // this.$store.dispatch('jia', this.num)
        // 直接和mutations 对话
        this.$store.commit('JIA', this.num)
      },
      decrement() {
        // this.$store.dispatch('jian', this.num)
        // 直接和mutations 对话
        this.$store.commit('JIAN', this.num)
      },
      incrementOdd() {
        // if (this.$store.state.sum % 2) {
        //   this.$store.dispatch('jia', this.num)
        // }
        this.$store.dispatch('jiaOdd', this.num)
      },
      incrementWait() {
        this.$store.dispatch('jiaWait', this.num)
      },
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
