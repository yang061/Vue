<template>
    <div>
        <School></School>
    </div>
</template>

<script>
// 引入组件
import School from './School'
import Student from './Student'

export default {
    name:'App',
    template:`<App></App>`,
    components:{
        School,
        Student,
    }
}
</script>

<style>

</style>