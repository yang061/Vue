<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    methods: {
      // 跨域：违背了同源策略(协议名，主机名，端口号必须都一样)，同源策略是前端的
      // 解决：通过代理服务器(cli),如果public里面有students文件夹，那就不会去代理服务器里面拿数据
      getStudents() {
        // 前缀写在端口号后面
        axios.get('http://localhost:8080/atguigu/students').then(
          (res) => {
            //成功回调
            console.log(res.data)
          },
          (error) => {
            console.log('请求失败了', error.message)
          }
        )
      },
      getCars() {
        // 前缀写在端口号后面
        axios.get('http://localhost:8080/demo/cars').then(
          (res) => {
            //成功回调
            console.log(res.data)
          },
          (error) => {
            console.log('请求失败了', error.message)
          }
        )
      },
    },
  }
</script>
