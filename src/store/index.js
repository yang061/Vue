// 该文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 使用插件
Vue.use(Vuex) //vm里面多了store配置项,不使用就没有store配置项
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

// 创建并导出(暴露)store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
})
