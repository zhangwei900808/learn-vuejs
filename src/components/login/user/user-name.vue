<template>
  <div class="form-group">
    <label>用户名</label>
    <input v-uname="showErrorLabel" v-on:change="userNameChange" type="text" v-model="username" class="form-control" :placeholder="placeholder">
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
        /*console.log('had changed')
        if(this.checkUserName(this.username)){
          this.showErrorLabel = false;
        }
        else{
          this.showErrorLabel = true;
        }*/
        this.$emit("childChange",'username',this.username)
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
