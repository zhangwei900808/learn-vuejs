<template>
  <div class="form-group">
    <label>你的爱好：</label>
    <div>
      <input type="text" class="form-control" v-model="inputTxt">
      <table v-if="showTable()">
        <thead>
          <th>类别1</th>
          <th>类别2</th>
        </thead>
        <tbody>
          <tr v-for="fav in getFavs">
            <td>{{fav.class1}}</td>
            <td>{{fav.class2}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        inputTxt:'',
        favs:[
          {
            'class1':'开发类',
            'class2':'js'
          },
          {
            'class1':'编程类',
            'class2':'java'
          }
        ]
      }
    },
    methods:{
      showTable(){
        return this.inputTxt != "";
      }
    },
    computed:{
      getFavs(){
        return this.favs.filter(function(value){
          return value.class2.indexOf(this.inputTxt) >=0 ;
        }.bind(this));
      }
    }
  }
</script>
