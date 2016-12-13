import Vue from "vue";

import me from "../components/me.vue";

let zw = new Vue({
  el:"#root",
  components:{'me':me}
})

new Vue(zw);
