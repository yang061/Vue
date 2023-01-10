<template>
  <div>
    <Count />
    <hr />
    <person />
  </div>
</template>

<script>
  import Count from './components/Count'
  import Person from './components/Person.vue'
  export default {
    name: 'App',
    components: { Count, Person },
    mounted() {
      console.log(this, 'app')
    },
  }
</script>
