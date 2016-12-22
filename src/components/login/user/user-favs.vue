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
            <td><a href="#" v-for="code in filterClass2(fav.class2)">
              {{code}}
            </a></td>
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
            'class2':[
              'js',
              'html',
              'css'
            ]
          },
          {
            'class1':'编程类',
            'class2':[
              'java',
              'php',
              'python'
            ]
          }
        ]
      }
    },
    methods:{
      showTable(){
        return this.inputTxt != "";
      },
      filterClass2(val){
        return val.filter(function(v){
          return v.indexOf(this.inputTxt)>=0;
        }.bind(this));
      }
    },
    computed:{
      getFavs(){
        return this.favs.filter(function(value){
          if(value.class2.filter(function(v){
            return v.indexOf(this.inputTxt)>=0;
          }.bind(this)).length>0){
            return true;
          }
          return false ;
        }.bind(this));
      }
    }
  }
</script>
