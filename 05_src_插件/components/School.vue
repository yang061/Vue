<template>
  <div>
    <h2 >学校姓名：{{ name | mySlice}}</h2>
    <h2>地址：{{ address }}</h2>   
  </div>
</template>

<script>

export default {
   name:'sch-ool',
   data() {
    return {
        name:'尚硅谷安德森打开看看打赏',
        address:'成都',
        x:111
    }
   }, 
}
</script>
