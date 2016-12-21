<template>
  <div id="row">
    <form class="form-horizontal" role="form">
      <h2 v-if="isadmin">管理员登录</h2>
      <h2 v-else>用户登录</h2>
      <user-name ref="uname" placeholder="请输入用户名"></user-name>
      <user-area></user-area>
      <user-favs></user-favs>
      <user-submit></user-submit>
      <a href="#" class="btn btn-primary" v-on:click="show">测试</a>
    </form>
  </div>
</template>

<script>

import username from "./user/user-name.vue";
import usersubmit from "./user/user-submit.vue";
import userarea from "./user/user-area.vue";
import userfavs from "./user/user-favs.vue";

export default{
  mounted(){
    this.$children.forEach(function(child){
      child.$on('childChange',this.setValue)
    }.bind(this))
  },
  data(){
    return {
      username:"",
      isadmin:false,
      userarea:0
    }
  },
  methods:{
    setValue(key,value){
      this.$data[key] = value;
    },
    show(){
      alert(this.userarea);
    }
  },
  components:{
    "user-name":username,
    "user-submit":usersubmit,
    "user-area":userarea,
    "user-favs":userfavs
  }
}

</script>
