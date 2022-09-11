import { reqCategoryList, reqMyCategoryList } from "@/api";
const state = { categoryList: [], mycategoryList: [] };
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  MYCATEGORYLIST(state, mycategoryList) {
    state.mycategoryList = mycategoryList;
  },
};
const actions = {
  async getCategoryList({ commit }) {
    let result = await reqCategoryList();
    // console.log(CategoryList);
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  async getMyCategoryList({ commit }) {
    let result = await reqMyCategoryList();
    if (result.code == 200) {
      commit("MYCATEGORYLIST", result.data);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
