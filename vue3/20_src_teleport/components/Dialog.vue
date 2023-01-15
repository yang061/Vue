<template>
  <div>
    <button @click="isShow = true">点我弹个窗</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <h4>一些内容</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'Dialog',
    setup() {
      let isShow = ref(false)
      return { isShow }
    },
  }
</script>

<style>
  .dialog {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 20px;
    width: 300px;
    height: 300px;
    text-align: center;
    background-color: green;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
