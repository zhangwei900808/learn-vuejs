<template>
  <div class="form-group">
    <label>用户名</label>
    <input v-uname v-on:change="userNameChange" type="text" v-model="username" class="form-control" :placeholder="placeholder">
    <zhangwei-input></zhangwei-input>

  </div>
</template>

<script>
  export default {
    mounted(){
      console.log('label='+this.showErrorLabel)
    },
    props:["placeholder"],
    methods:{
      userNameChange(){
        this.$store.state.users.user_name = this.username;
      }
    },
    data:function(){
      return {
        username:"",
        showErrorLabel:true
      }
    }
  }
</script>
