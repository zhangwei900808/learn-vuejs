import Vue from "vue";

import my_age from "../components/myage.vue";

let zw = new Vue({
  el:"#root",
  components:{'myage':my_age}
})

new Vue(zw);
