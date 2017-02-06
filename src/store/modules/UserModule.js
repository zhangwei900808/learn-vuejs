export default{
  state:{
    user_name:''
  },
  mutations:{
    //注意：只有执行this.$store.commit("showUserName");才会执行showUserName方法
    showUserName(state){
      alert(state.user_name);
    }
  }
}
