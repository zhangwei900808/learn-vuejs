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
        /*console.log('had changed')
        if(this.checkUserName(this.username)){
          this.showErrorLabel = false;
        }
        else{
          this.showErrorLabel = true;
        }*/
        //this.$emit("childChange",'username',this.username)
        this.$store.state.user_name = this.username;
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
