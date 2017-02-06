export default{
  install(Vue){
    Vue.component('zhangwei-input',{
      template:`<div><input type="text" v-model="textValue" class="form-control" placeholder="请输入用户名">
                <label v-if="showErrorLabel" class="label label-danger">用戶名不合法</label></div>`,
      data(){
        return {
          textValue:''
        }
      },
      computed:{
        showErrorLabel(){
          if(/\w{6,20}/.test(this.textValue) || this.textValue==""){
            return false;
          }
          return true;
        }
      }
    })
    Vue.prototype.checkUserName=(value)=>{
      console.log('value='+value)
      if(value==""){
        return true;
      }
      return /\w{6,20}/.test(value);
    }
    Vue.prototype.errorLabel = null;
    Vue.prototype.hasError = false;
    Vue.directive('uname',{
      bind(){
        let error = Vue.extend({
          template:`<label class="label label-danger">用戶名不合法</label>`
        })
        Vue.errorLabel=(new error()).$mount().$el;
      },
      update(el,binding,vnode){
        console.log('update')
        if(/\w{6,20}/.test(el.value)){
          if(Vue.hasError){
            el.parentNode.removeChild(Vue.errorLabel);
            Vue.hasError=!Vue.hasError;
          }
        }
        else{
          if(!Vue.hasError){
            el.parentNode.appendChild(Vue.errorLabel);
            Vue.hasError=!Vue.hasError;
          }
        }

      }
    })
  }
}
