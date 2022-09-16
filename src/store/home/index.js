import {
  reqCategoryList,
  reqMyCategoryList,
  reqGetBannerList,
  reqGetFloorList,
} from "@/api";
const state = {
  categoryList: [],
  myCategoryList: [],
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  MYCATEGORYLIST(state, myCategoryList) {
    state.myCategoryList = myCategoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
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
  async GetBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
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
