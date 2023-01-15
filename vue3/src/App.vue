<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <!-- Suspense原理是准备两个插槽，一个是正常显示的页面(v-slot:default)，一个是loading(fallback) -->
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback> 加载中 </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child.vue'
  import { defineAsyncComponent } from 'vue'
  const Child = defineAsyncComponent(() => import('./components/Child.vue')) //异步引入
  export default {
    name: 'App',
    components: { Child },
  }
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>
