<template>
  <div class="form-group">
    <label>用户名</label>
    <input type="text" v-model="username" class="form-control" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    props:["placeholder"],
    data:function(){
      return {
        username:""
      }
    }
  }
</script>
