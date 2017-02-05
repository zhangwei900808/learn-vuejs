<template>
  <div class="news-list">
    <div class="row">
      <div class="page-header" v-for="news in this.$store.getters.getNews">
        <h2> <router-link :to="{name:'newsdetail',params:{newsid:news.newsid}}">{{ news.title }}</router-link><small>{{ news.pubtime }}</small>
        </h2>
        <p>
          {{ news.desc }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    created(){
      if (this.$store.state.newslist.length==0) {
        this.$http.get('http://www.awbeci.app/vue').then(
          function(res){
            //注意这里是赋值res.body而不是res
            this.$store.state.newslist=res.body;
          },
          function(res){

          }
        )
      }
    },
    // data(){
    //   return{
    //     newslist:[
    //       {
    //         newsid:101,
    //         pubtime:"2016-10-01",
    //         title:"新闻1",
    //         desc:"描述1"
    //       },
    //       {
    //         newsid:102,
    //         pubtime:"2016-10-02",
    //         title:"新闻2",
    //         desc:"描述2"
    //       },
    //       {
    //         newsid:103,
    //         pubtime:"2016-10-03",
    //         title:"新闻3",
    //         desc:"描述3"
    //       },
    //       {
    //         newsid:104,
    //         pubtime:"2016-10-04",
    //         title:"新闻4",
    //         desc:"描述4"
    //       },
    //       {
    //         newsid:105,
    //         pubtime:"2016-10-05",
    //         title:"新闻5",
    //         desc:"描述5"
    //       }
    //     ]
    //   }
    // }
  }
</script>
