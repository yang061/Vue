<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
      </div>
</template>


<script>
export default {
      data() {
        return {
          name: '小明',
          age: 18,
        }
      },    
    }
     
</script>


