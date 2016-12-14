<style>
  #myname{
  color:green;
  }
</style>
<template>
  <div id="myname">
    我的年龄：{{value}}
  </div>
</template>
<script>
  export default{
    props:["value"]
  }
</script>
