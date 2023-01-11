// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
//引入ElementUI组件库

// 完整引入
// import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

// 按需引入
import { Button, Row, DatePicker } from 'element-ui'
Vue.component('atguigu-button', Button)
Vue.component('atguigu-row', Row)
Vue.component('atguigu-data-picker', DatePicker)

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 使用ElementUI
// Vue.use(ElementUI)

// 创建vue实例
new Vue({
  el: '#app',
  render: (h) => h(App),
})
