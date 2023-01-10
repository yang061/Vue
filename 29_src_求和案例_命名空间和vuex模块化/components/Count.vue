<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3>Person组件的总人数为{{ personList.length }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!--increment括号后面不写数据是event  -->
    <!-- 对象写法 -->
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>

    <!-- 对象写法 -->
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
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
      // 借助mapState生成计算属性，从state中读取数据(数组写法)
      ...mapState('countAbout', ['sum', 'school', 'subject']),
      ...mapState('personAbout', ['personList']),

      // 借助mapGetters生成计算属性，从state中读取数据(数组写法)
      ...mapGetters('countAbout', ['bigSum']),
    },
    methods: {
      // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutation(对象写法)
      ...mapMutations('countAbout', { increment: 'JIA', decrement: 'JIAN' }),

      // 借助mapActions生成对应的方法，方法中会调用dispatch去联系mutation(对象写法),
      // 对象写法
      ...mapActions('countAbout', {
        incrementOdd: 'jiaOdd',
        incrementWait: 'jiaWait',
      }),
    },
    mounted() {
      // {he:'sum'} ,he不加'' 是因为简写，右边的不能简写
      // const x = mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' })
      // console.log(x)
    },
  }
</script>

<style>
  button {
    margin-left: 5px;
  }
</style>
