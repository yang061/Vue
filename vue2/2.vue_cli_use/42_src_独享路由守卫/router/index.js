// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {
        title: '关于',
      },
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {
        title: '主页',
      },
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          // 不需要的路由不写(不写为undefined为假)
          meta: {
            isAuth: true,
            title: '新闻',
          },
          // 进入组件配置之前
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem('school') == 'atguigu') {
                next()
              } else {
                alert('学校名不对，无权查看')
                next({ name: 'guanyu' })
              }
            } else {
              next()
            }
          },
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          // 不需要的路由不写(不写为undefined为假)
          meta: {
            isAuth: true,
            title: '消息',
          },
          children: [
            {
              name: 'xiangqing',
              path: 'detail/:id/:title',
              component: Detail,
              meta: {
                title: '详情',
              },
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

// 全局前置路由守卫：初始化的时候被调用，每一次路由切换之前被调用
// to是要去的路由组件，from来自的路由组件,next()是放行
/* router.beforeEach((to, from, next) => {
  console.log(to, from)
  // 使用isAuth
  if (to.meta.isAuth) {
    if (localStorage.getItem('school') == 'atguigu') {
      next()
    } else {
      alert('学校名不对，无权查看')
      next({ name: 'guanyu' })
    }
  } else {
    next()
  }
}) */

// 全局后置路由守卫：初始化的时候被调用，每一次路由切换之后被调用,没有next()
router.afterEach((to, from) => {
  console.log(to, from)
  document.title = to.meta.title || '硅谷系统'
})

export default router
