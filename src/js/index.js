import Vue from "vue";

import userlogin from "../components/login/user-login.vue";

// import me from "../components/me.vue";
//
// let zw = new Vue({
//   el:"#root",
//   components:{'me':me}
// })

let zw = {
  el:'#root',
  components:{
    "user-login":userlogin
  }
}

new Vue(zw);
