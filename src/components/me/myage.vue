<style>
  #myage{
  color:red;
  }
</style>
<template>
  <div id="myage">
    我的年龄：{{value}}
  </div>
</template>
<script>
  export default{
    props:["value"]
  }
</script>
