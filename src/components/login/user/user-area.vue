<template>
  <div class="from-group">
    <label>所属区域</label>
    <div>
      <select class="form-control" v-model="selectedAreaData" v-on:change="selectedChange">
        <option v-for="area in areas" v-bind:value="area.value">{{area.text}}</option>
      </select>
    </div>
  </div>
</template>
<script>
  export default{
      methods:{
        selectedChange(){
          this.$emit('childChange','userarea',this.selectedAreaData)
        }
      },
      data(){
        return {
          selectedAreaData:0,
          areas:[
            {
              'value':0,
              'text':'-请选择-'
            },
            {
              'value':1,
              'text':'上海'
            },
            {
              'value':2,
              'text':'南京'
            },
            {
              'value':3,
              'text':'北京'
            }
          ]
        }
      }
    }
</script>
