// 导入所需模块
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
// 使用模块
const routerPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch((err) => {});
};

Vue.use(VueRouter);

// 路由定义与对外暴露
export default new VueRouter({
  // 编写路由规则
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
});
