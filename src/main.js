import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import TypeNav from "@/components//TypeNav/index.vue";
//全局组件
//TypeNav三级联动组件
Vue.component(TypeNav.name, TypeNav);
//引入mockServer.js---mock数据
import "@/mock/mockServer";
import "swiper/css/swiper.min.css";
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
