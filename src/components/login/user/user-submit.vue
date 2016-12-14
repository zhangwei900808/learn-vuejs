<template>
  <div class="form-group">
     <button type="button" v-on:click="test" class="btn btn-success">提交</button>
  </div>
</template>

<script>
  export default{
  methods:{
    test(){
      alert(this.$parent.$refs.uname.$data.username)
    }
  }
  }
</script>
