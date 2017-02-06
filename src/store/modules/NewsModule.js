import Vue from "vue";

export default{
  state:{
    newslist:[],
    newsdetail:{}
  },
  mutations:{
    setAgree(state,num){
      state.newsdetail.agree=num;
    }
  },
  actions:{
    agree(context , newsid){
      //post提交到laravel
      //Vue.http.headers.common['X-CSRF-TOKEN'] = '{{ csrf_token() }}';
      Vue.http.get('http://www.awbeci.app/vue/'+newsid+'/edit').then(function(res){
        context.commit('setAgree',res.body.agree);
      },function(res){

      })
    }
  },
  getters:{
    getNews(state){
      return state.newslist.filter(function(news){
        return !news.isdeleted;
      })
    }
  }
}
