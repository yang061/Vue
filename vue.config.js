const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  /* devServer: {
    host: '0.0.0.0',
    // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }, */
  // 开启代理服务器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000',
  }, */

  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      // 请求前缀,如果请求前缀是atguigu，那就把请求转发给http://localhost:5000
      '/atguigu': {
        target: 'http://localhost:5000',
        // 重写路径 ^/atguigu 把所有(正则^)atguigu前缀变为空
        pathRewrite: { '^/atguigu': '' },
        // ws: true, //用于支持websocket,默认为true
        // changeOrigin: true,
        /* 通俗： 为true是说谎(该案例下端口号为5000【说谎】)，为false是不说慌(该案例下端口号为8080【不说谎】) 
        官方：用于控制请求头中的host值，,默认为true
        */
      },
      '/demo': {
        target: 'http://localhost:5001',
        // 重写路径 ^/atguigu 把所有(正则^)atguigu前缀变为空
        pathRewrite: { '^/demo': '' },
        // ws: true, //用于支持websocket，,默认为true
        // changeOrigin: true,
        /* 通俗： 为true是说谎(该案例下端口号为5000【说谎】)，为false是不说慌(该案例下端口号为8080【不说谎】) 
        官方：用于控制请求头中的host值，,默认为true
        */
      },
    },
  },
})
