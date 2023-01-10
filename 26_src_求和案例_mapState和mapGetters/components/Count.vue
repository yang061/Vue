<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
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
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'count',
    data() {
      return {
        num: 1, //用户选择的数字
      }
    },
    computed: {
      // 靠程序员亲自去写计算属性
      /* he() {
        return this.$store.state.sum
      },
      xuexiao() {
        return this.$store.state.school
      },
      xueke() {
        return this.$store.state.subject
      }, */
      /* *********************************************************** */

      // 把mapState对象以键值对展开放在computed里面
      // 借助mapState生成计算属性，从state中读取数据(对象写法)
      // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

      // 借助mapState生成计算属性，从state中读取数据(数组写法)
      /* sum两个用途:
        1.用于计算属性，
        2.再state里面去找sum
      */
      ...mapState(['sum', 'school', 'subject']),
      /* *********************************************************** */

      /* bigSum() {
        return this.$store.state.bigSum
      }, */
      /* *********************************************************** */
      // 借助mapGetters生成计算属性，从state中读取数据(对象写法)
      // ...mapGetters({bigSum:'bigSum'}),
      // 借助mapGetters生成计算属性，从state中读取数据(数组写法)
      ...mapGetters(['bigSum']),
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
    mounted() {
      // {he:'sum'} ,he不加'' 是因为简写，右边的不能简写
      const x = mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' })
      console.log(x)
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
