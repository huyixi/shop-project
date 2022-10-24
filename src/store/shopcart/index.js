import { reqGetShopcartList, reqDeleteCartById, reqUpdateChecked } from "@/api";
import { getUUID } from "@/utils/uuid_token";
const state = {
  uuid_token: getUUID(),
  shopcartList: [],
};
const mutations = {
  GETSHOPCARTLIST(state, shopcartList) {
    state.shopcartList = shopcartList;
  },
};
const actions = {
  async getShopcartList({ commit }) {
    let result = await reqGetShopcartList();
    commit("GETSHOPCARTLIST", result.data);
  },
  async deleteCart({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    // if (result.code == "200") {
    //   return "ok";
    // } else {
    //   return Promise.reject(new Error("faile"));
    // }
  },
  async updateChecked({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateChecked(skuId, isChecked);
    // if (result.code == "200") {
    //   return "ok";
    // } else {
    //   return Promise.reject(new Error("faile"));
    // }
  },
  deleteSelectedCart({ getters, dispatch }) {
    getters.cartInfoList.forEach((item) => {
      item.isChecked == 1 ? dispatch("deleteCart", item.skuId) : "";
    });
  },
};
const getters = {
  cartInfoList(state) {
    return state.shopcartList[0].cartInfoList;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
