import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import home from "./home";
import search from "./search";
import user from "./user";
import detail from "./detail";
import shopcart from "./shopcart";

export default new Vuex.Store({
  modules: {
    home,
    search,
    user,
    detail,
    shopcart,
  },
});
