// 导入路由组件
import Home from "../pages/Home/index.vue";
import Search from "../pages/Search/index.vue";
import Registry from "../pages/Registry/index.vue";
import Login from "../pages/Login/index.vue";
import Detail from "../pages/Detail/";
import AddCartSuccess from "../pages/AddCartSuccess";
import ShopCart from "../pages/ShopCart";
export default [
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
    path: "/search/:keyword?",
    name: "search",
    component: Search,
    meta: {
      show: true,
    },
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: {
      show: true,
    },
  },
  {
    path: "/registry",
    name: "registry",
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
  {
    // 占位传参
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      show: false,
    },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true,
    },
  },
];
