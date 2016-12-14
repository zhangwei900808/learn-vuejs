<template>
  <div id="row">
    <form class="form-horizontal" role="form">
      <user-name ref="uname"  placeholder="请输入用户名"></user-name>
      <user-submit></user-submit>
    </form>
  </div>
</template>

<script>

import username from "./user/user-name.vue";
import usersubmit from "./user/user-submit.vue";

export default{
  components:{
    "user-name":username,
    "user-submit":usersubmit
  }
}

</script>
