// 导入所需模块
import Vue from "vue";
import VueRouter from "vue-router";
// 使用模块
Vue.use(VueRouter);
// 导入路由组件
import Home from "../pages/Home/index.vue";
import Search from "../pages/Search/index.vue";
import Registry from "../pages/Registry/index.vue";
import Login from "../pages/Login/login.vue";
// 路由定义与对外暴露
export default new VueRouter({
  // 编写路由规则
  routes: [
    {
      path: "/",
      redirect: "/home",
      meta: {
        show: true,
      },
    },
    {
      path: "/home",
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: "/search/:keyword",
      name: "search",
      component: Search,
      meta: {
        show: true,
      },
    },
    {
      path: "/registry",
      component: Registry,
      meta: {
        show: false,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
    },
  ],
});
