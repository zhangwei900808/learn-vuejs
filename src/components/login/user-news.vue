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
      if (this.$store.state.news.newslist.length==0) {
        this.$http.get('http://www.awbeci.app/vue').then(
          function(res){
            this.$store.state.news.newslist=res.body;
          },
          function(res){

          }
        )
      }
    }
  }
</script>
