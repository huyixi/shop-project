import { reqGetShopcartList, reqDeleteCartById } from "@/api";
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
    console.log(result);
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
