<template>
  <div class="form-group">
    <label>用户名</label>
    <input v-on:change="userNameChange" type="text" v-model="username" class="form-control" :placeholder="placeholder">
  </div>
</template>

<script>
  export default {
    props:["placeholder"],
    methods:{
      userNameChange(){
        this.$emit("updateUsername",this.username)
      }
    },
    data:function(){
      return {
        username:""
      }
    }
  }
</script>
