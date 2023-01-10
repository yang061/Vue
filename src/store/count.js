// 求和功能相关的配置
export default {
  namespaced: true,
  actions: {
    //jia:function(){} 键值对简写 jia(){}
    //   context:上下文,可能使用的方法都放在这个对象里面
    /* jia(context, value) {
    context.commit('JIA', value)
  },
  jian(context, value) {
    context.commit('JIAN', value)
  }, */
    jiaOdd(context, value) {
      console.log('处理了一些事情--jiaOdd')
      context.dispatch('demo2', value)
    },
    demo2(context, value) {
      // dispatch用法
      console.log('处理了一些事情--demo2')
      if (context.state.sum % 2) {
        context.commit('JIA', value)
      }
    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 1000)
    },
  },
  mutations: {
    JIA(state, value) {
      // state是下面定义的，有getter和setter(响应式)
      // console.log('mutation', state, value)
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0, //当前的和
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    },
  },
}
