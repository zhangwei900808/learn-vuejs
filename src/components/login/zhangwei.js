export default{
  install(Vue){
    Vue.prototype.checkUserName=(value)=>{
      console.log('value='+value)
      if(value==""){
        return true;
      }
      return /\w{6,20}/.test(value);
    }

    Vue.directive('uname',{
      bind(){
        //console.log("begin");
      },
      update(el,binding,vnode){
        console.log('update')
        if(/\w{6,20}/.test(el.value)){
          vnode.context[binding.expression]=false;
        }
        else{
          vnode.context[binding.expression]=true;
        }
      }
    })
  }
}
