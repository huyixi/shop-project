import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import TypeNav from "@/components/TypeNav/index.vue";
import Carousel from "@/components/Carousel/index.vue";
import Pagination from "@/components/Pagination";

//全局组件
//TypeNav三级联动组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

//引入mockServer.js---mock数据
import "@/mock/mockServer";
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount("#app");
