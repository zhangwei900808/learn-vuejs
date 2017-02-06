<template>
  <div class="news-list">
    <div class="row">
      <div class="page-header">
        <h2> {{this.$store.state.news.newsdetail.title}}<small>{{this.$store.state.news.newsdetail.pubtime}}</small>
        </h2>
        <p>点赞数：{{this.$store.state.news.newsdetail.agree}}<button class="btn btn-primary" @click="submitAgree">点赞</button></p>
        <p>
          {{this.$store.state.news.newsdetail.desc}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    created(){
      this.$http.get('http://www.awbeci.app/vue/'+this.$route.params.newsid).then(function(val){
        this.$store.state.news.newsdetail = val.body;
      },function(val){

      })
    },
    methods:{
      submitAgree(){
        this.$store.dispatch('agree',this.$store.state.news.newsdetail.newsid)
      }
    }
  }
</script>
