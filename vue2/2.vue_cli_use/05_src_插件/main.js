// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入插件
import plugins from './plugins'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(plugins, 4, 5)

// 创建vue实例
new Vue({
  el: '#app',
  render: (h) => h(App),
})
