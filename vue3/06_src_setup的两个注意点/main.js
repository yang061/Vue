// 引入的不再是Vue构造函数了，引入的是名为createApp的工厂函数(不需要new来调用)
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象--app(类似于之前Vue2中的vm，但app比vm更轻)
// mount：指定容器是 id为app的结构
const app = createApp(App)

// 挂载
app.mount('#app')

// vue2写法，在vue3不可以用了
/* const vm =new Vue({
    render:h=>h(App),
})
vm.$mount('#app') */
