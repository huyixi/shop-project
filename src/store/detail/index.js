import { reqGetGoodDetail } from "@/api";
const state = {
  goodDetail: {},
};
const mutations = {
  GETGOODDETAIL(state, goodDetail) {
    state.goodDetail = goodDetail;
  },
};
const actions = {
  async getGoodDetail({ commit }, skuId) {
    let result = await reqGetGoodDetail(skuId);
    if (result.code == 200) {
      commit("GETGOODDETAIL", result.data);
    }
  },
};
const getters = {
  categoryView(state) {
    return state.goodDetail.categoryView || {};
  },
  skuInfo(state) {
    return state.goodDetail.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodDetail.spuSaleAttrList || [];
  },
  skuImageList(state) {
    return state.goodDetail.skuInfo.skuImageList || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
