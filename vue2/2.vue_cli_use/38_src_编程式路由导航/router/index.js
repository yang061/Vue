// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          // 子路由不加/
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              // 1.props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件(用的少，传递的是死数据)
              // props:{a:1,b:'hello'},

              // 2.props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props: true,

              // 3.props的第三种写法，值为函数
              // (1)完整写法
              /* props($route){
                return {
                  id:$route.query.id,
                  title:$route.query.title
                }
              }, */
              // (2)解构赋值写法
              props({ query: { id, title } }) {
                return {
                  id: id,
                  title: title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})
