export default {
  // 形参是Vue构造者，不是vm
  install(Vue, x, y) {
    // 定义全局过滤
    Vue.filter('mySlice', function (value) {
      return value.slice(0, 5) //截取前五位
    })

    console.log(x + y)
    // 定义全局指令
    Vue.directive('fbind', {
      // 指令与元素成功绑定时(一上来)
      bind(element, binding) {
        console.log(binding)
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(element) {
        element.focus()
      },
      //  指令所在的模板被重新解析时
      update(element, binding) {
        element.value = binding.value
      },
    })

    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 1,
          y: 2,
        }
      },
    })

    // 在Vue原型上添加一个方法(vm和vc都能用了)
    Vue.prototype.hello = () => {
      alert('hello')
    }
  },
}
