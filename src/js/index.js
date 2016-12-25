import Vue from "vue";

import userlogin from "../components/login/user-login.vue";
import usernews from "../components/login/user-news.vue";
import usernav from "../components/login/user-nav.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

const router =new VueRouter({
  routes:[
    {
      path:'/news',component:usernews
    },
    {
      path:'/login',component:userlogin
    }
  ]
})

Vue.component('user-nav',usernav);

let myvue = new Vue({
  el:'#root',
  router:router,
  mounted(){
    //vue ajax
    this.$http.get('http://www.awbeci.app/vue').then(function(res){
      alert(res.body.test1)
    },function(res){

    })
  }
})

// import me from "../components/me.vue";
//
// let zw = new Vue({
//   el:"#root",
//   components:{'me':me}
// })

// let zw = {
//   el:'#root',
//   components:{
//     "user-login":userlogin,
//     "user-news":usernews,
//     "user-nav":usernav
//   }
// }
//
// let vuee = new Vue(zw);
// window.onhashchange = function(){
//   if(location.hash=="#admin")
//     vuee.$children[0].$data.isadmin=true;
//   else
//     vuee.$children[0].$data.isadmin=false;
// }
