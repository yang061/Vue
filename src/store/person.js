import axios from 'axios'
import { nanoid } from 'nanoid'
// 人员管理功能相关的配置
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      // 姓王才提交
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('必须姓王')
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        (res) => {
          // console.log(res)
          context.commit('ADD_PERSON', { id: nanoid(), name: res.data })
        },
        (error) => {
          alert(error.message)
        }
      )
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      // 在前添加
      state.personList.unshift(value)
    },
  },
  state: {
    personList: [
      {
        id: '001',
        name: '张三',
      },
    ],
  },
  getters: {
    // 拿到自己的state(局部)
    firstPersonName(state) {
      return state.personList[0].name
    },
  },
}
