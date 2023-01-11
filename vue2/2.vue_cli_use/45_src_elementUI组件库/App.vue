<template>
  <div>
    <button>原生的按钮</button>
    <input type="text" />
    <atguigu-row>
      <atguigu-button>默认按钮</atguigu-button>
      <atguigu-button type="primary">主要按钮</atguigu-button>
      <atguigu-button type="success">成功按钮</atguigu-button>
      <atguigu-button type="info">信息按钮</atguigu-button>
      <atguigu-button type="warning">警告按钮</atguigu-button>
      <atguigu-button type="danger">危险按钮</atguigu-button>
    </atguigu-row>
    <atguigu-date-picker v-model="value1" type="date" placeholder="选择日期">
    </atguigu-date-picker>
  </div>
</template>

<script>
  export default {
    name: 'App',
    // 一般组件
    components: {},
    data() {
      return {}
    },
  }
</script>
