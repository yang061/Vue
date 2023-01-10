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
    <!--increment括号后面不写数据是event  -->
    <!-- 对象写法 -->
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <!-- 数组写法 -->
    <!-- <button @click="JIA(num)">+</button>
    <button @click="JIAN(num)">-</button> -->
    <!-- 对象写法 -->
    <!-- <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button> -->
    <!-- 数组写法 -->
    <button @click="jiaOdd(num)">当前求和为奇数再加</button>
    <button @click="jiaWait(num)">等一等再加</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'count',
    data() {
      return {
        num: 1, //用户选择的数字
      }
    },
    computed: {
      // 把mapState对象以键值对展开放在computed里面
      // 借助mapState生成计算属性，从state中读取数据(对象写法)
      // ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),

      // 借助mapState生成计算属性，从state中读取数据(数组写法)
      /* sum两个用途:
        1.用于计算属性，
        2.再state里面去找sum
      */
      ...mapState(['sum', 'school', 'subject']),

      // 借助mapGetters生成计算属性，从state中读取数据(对象写法)
      // ...mapGetters({bigSum:'bigSum'}),
      // 借助mapGetters生成计算属性，从state中读取数据(数组写法)
      ...mapGetters(['bigSum']),
    },
    methods: {
      // 程序员亲自写方法
      /*  increment() {
        // this.$store.dispatch('jia', this.num)
        // 直接和mutations 对话
        this.$store.commit('JIA', this.num)
      },
      decrement() {
        // this.$store.dispatch('jian', this.num)
        // 直接和mutations 对话
        this.$store.commit('JIAN', this.num)
      }, */

      /* *********************************************************** */
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutation(对象写法)
      ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutation(数组写法),
      // ...mapMutations(['JIA', 'JIAN']),

      /* *********************************************************** */
      // 程序员亲自写方法
      /* incrementOdd() {
        // if (this.$store.state.sum % 2) {
        //   this.$store.dispatch('jia', this.num)
        // }
        this.$store.dispatch('jiaOdd', this.num)
      },
      incrementWait() {
        this.$store.dispatch('jiaWait', this.num)
      }, */

      /* *********************************************************** */
      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mutation(对象写法),
      // 对象写法
      // ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mutation(数组写法),
      // 数组写法
      ...mapActions(['jiaOdd', 'jiaWait']),
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
