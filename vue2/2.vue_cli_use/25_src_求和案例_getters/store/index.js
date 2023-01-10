// 该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 使用插件
Vue.use(Vuex) //vm里面多了store配置项,不使用就没有store配置项
// 引入Vuex
import Vuex from 'vuex'
// 准备actions --用于响应组件里面的动作
const actions = {
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
}

// mutations --用于操作数据(state)
const mutations = {
  JIA(state, value) {
    // state是下面定义的，有getter和setter(响应式)
    // console.log('mutation', state, value)
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
}

// 准备state --用于存储数据
const state = {
  sum: 0, //当前的和
}

// 准备getters --用于将state中的数据进行加工(相当于可共享的计算属性)
const getters = {
  bigSum(state) {
    return state.sum * 10
  },
}

// 创建并导出(暴露)store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
