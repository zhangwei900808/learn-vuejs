import Vue from "vue";

import usernav from "../components/login/user-nav.vue";
import newsdetail from "../components/login/user-news-detail.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from "vuex";
import zhangwei from "../components/login/zhangwei";
import UserModule from "./../store/modules/UserModule";
import NewsModule from "./../store/modules/NewsModule";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

const vuex_store = new Vuex.Store({
  modules:{
    users:UserModule,
    news:NewsModule
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
  router:router
})
