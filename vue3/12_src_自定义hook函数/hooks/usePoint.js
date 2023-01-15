import { onMounted } from 'vue'
import { reactive } from 'vue'
import { onBeforeUnmount } from 'vue'
export default function () {
  // 实现鼠标‘打点’的数据
  let point = reactive({
    x: 0,
    y: 0,
  })
  // 实现鼠标‘打点’的方法
  function savePoint(e) {
    point.x = e.pageX
    point.y = e.pageY
    console.log(e.pageX, e.pageY)
  }
  // 实现鼠标‘打点’的相关的生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
