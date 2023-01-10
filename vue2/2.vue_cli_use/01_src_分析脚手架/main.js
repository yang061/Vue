/* 
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象---vm
new Vue({
  el: '#app',
  // 下面这行代码，完成了这个功能，就将App组件放入容器中
  render: (h) => h(App),
  // vue帮忙调的函数
  // render不用this,写两个参数是因为h1是html内置标签，需要赋值，写组件时只需要一个参数
  // render: (q) => q('h1', '你好'),
  template: `<app></app>`,
  // template: `<h2>你好</h2>`,
  components: { App },
})
