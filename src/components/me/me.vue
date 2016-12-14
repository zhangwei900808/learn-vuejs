<template>
  <div id="me">
    <myage v-bind:value="name"></myage>
    <myname v-bind:value="age"></myname>
  </div>
</template>

<script>
  import myage from './myage.vue';
  import myname from './myname.vue';

  export default{
    props:["name","age"],
    components:{
      'myage':myage,
      'myname':myname
    }
  }
</script>
