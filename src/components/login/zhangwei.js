export default{
  install(Vue){
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
        //console.log("begin");
        let error = Vue.extend({
          template:`<label class="label label-danger">用戶名不合法</label>`
        })
        Vue.errorLabel=(new error()).$mount().$el;
      },
      update(el,binding,vnode){
        console.log('update')
        if(/\w{6,20}/.test(el.value)){
          //vnode.context[binding.expression]=false;
          if(Vue.hasError){
            el.parentNode.removeChild(Vue.errorLabel);
            Vue.hasError=!Vue.hasError;
          }
        }
        else{
          //vnode.context[binding.expression]=true;
          if(!Vue.hasError){
            el.parentNode.appendChild(Vue.errorLabel);
            Vue.hasError=!Vue.hasError;
          }
        }

      }
    })
  }
}
