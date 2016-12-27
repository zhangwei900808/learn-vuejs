<template>
  <div class="news-list">
    <div class="row">
      <div class="page-header">
        <h2> {{newsdetail.title}}<small>{{newsdetail.pubtime}}</small>
        </h2>
        <p>
          {{newsdetail.desc}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    created(){
      this.$http.get('http://www.awbeci.app/vue/'+this.$route.params.newsid).then(function(val){
        this.newsdetail = val.body;
      },function(val){

      })
    },
    data(){
      return{
        newsdetail:{}
      }
    }
  }
</script>
