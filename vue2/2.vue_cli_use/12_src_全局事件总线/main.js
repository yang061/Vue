// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 傀儡x
/* // 创建一个组件
const demo = Vue.extend({})
// d是vc
const d = new demo()

Vue.prototype.x = d */

// 创建vue实例
new Vue({
  el: '#app',
  render: (h) => h(App),
  beforeCreate() {
    // this 就是vm
    Vue.prototype.$bus = this //安装全局事件总线
  },
})
