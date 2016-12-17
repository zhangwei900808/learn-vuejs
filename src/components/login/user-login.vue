<template>
  <div id="row">
    <form class="form-horizontal" role="form">
      <h2 v-if="isadmin">管理员登录</h2>
      <h2 v-else>用户登录</h2>
      <user-name ref="uname"
        v-on:updateUsername="setUsername" placeholder="请输入用户名"></user-name>
      <user-submit></user-submit>
      <a href="#" class="btn btn-primary" v-on:click="show">测试</a>
    </form>
  </div>
</template>

<script>

import username from "./user/user-name.vue";
import usersubmit from "./user/user-submit.vue";

export default{
  data(){
    return {
      username:"",
      isadmin:false
    }
  },
  methods:{
    setUsername(uname){
      this.username = uname;
    },
    show(){
      alert(this.username);
    }
  },
  components:{
    "user-name":username,
    "user-submit":usersubmit
  }
}

</script>
