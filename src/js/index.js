import Vue from "vue";

//import userlogin from "../components/login/user-login.vue";
//import usernews from "../components/login/user-news.vue";
import usernav from "../components/login/user-nav.vue";
import newsdetail from "../components/login/user-news-detail.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from "vuex";
import zhangwei from "../components/login/zhangwei";


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const vuex_store = new Vuex.Store({
  state:{
    user_name:''
  },
  mutations:{
    //注意：只有执行this.$store.commit("showUserName");才会执行showUserName方法
    showUserName(state){
      alert(state.user_name);
    }
  }
})

//自定义组件
Vue.use(zhangwei);

//异步加载组件
const userlogin = r=>{
  require.ensure([],()=>{
    r(require("../components/login/user-login.vue"));
  },'vuecs')//vuecs是组件别名
}

const usernews = n=>{
  require.ensure([],()=>{
    n(require("../components/login/user-news.vue"));
  },'vuecs')
}

const router =new VueRouter({
  routes:[
    {
      path:'/',component:usernews,name:''
    },
    {
      path:'/news',component:usernews,name:'newlist'
    },
    {
      path:'/news/:newsid',component:newsdetail,name:'newsdetail'
    },
    {
      path:'/login',component:userlogin,name:'userlogin'
    }
  ]
})

Vue.component('user-nav',usernav);

let myvue = new Vue({
  el:'#root',
  store:vuex_store,
  router:router,
  //程序运行完成之后
  // mounted(){
  //   //vue ajax
  //   this.$http.get('http://www.awbeci.app/vue').then(function(res){
  //     alert(res.body.test1)
  //   },function(res){
  //
  //   })
  // }
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
