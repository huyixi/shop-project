import { reqGetGoodDetail, reqAddOrUpdateShopcar } from "@/api";
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodDetail: {},
  uuid_token: getUUID(),
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
  async addOrUpdateShopcar({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopcar(skuId, skuNum);
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
