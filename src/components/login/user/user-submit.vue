<template>
  <div class="form-group">
     <button type="button" v-on:click="submit" class="btn btn-success">提交</button>
  </div>
</template>

<script>
  export default{
  methods:{
    submit(){
      //alert(this.$parent.$refs.uname.$data.username)
      this.$store.commit("showUserName");
    }
  }
  }
</script>
