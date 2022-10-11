import { repGetSearchInfo } from "@/api";
const state = {
  searchInfo: {},
};
const mutations = {
  SEARCHINFO(state, data) {
    state.searchInfo = data;
  },
};
const actions = {
  async getSearchInfo({ commit }, data) {
    let result = await repGetSearchInfo(data);
    if (result.code == 200) {
      commit("SEARCHINFO", result.data);
    }
  },
};
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList;
  },
  attrsList(state) {
    return state.searchInfo.attrsList;
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
