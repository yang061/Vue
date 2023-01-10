// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入store
import store from './store'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vue实例
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  beforeCreate() {
    // 安装全局总线,触发事件总线的source是<Root>
    Vue.prototype.$bus = this
  },
})
