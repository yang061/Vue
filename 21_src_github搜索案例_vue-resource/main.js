// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入插件
import vueResource from 'vue-resource'
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用插件(vm和vc都多了$http)
Vue.use(vueResource)

// 创建vue实例
new Vue({
  el: '#app',
  render: (h) => h(App),
  beforeCreate() {
    // 安装全局总线,触发事件总线的source是<Root>
    Vue.prototype.$bus = this
  },
})
