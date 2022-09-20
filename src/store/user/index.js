import { reqGetCode, reqUserRegister } from "@/api";
const state = {
  code: "",
};
const mutations = {
  CODE(state, code) {
    state.code = code;
  },
};
const actions = {
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("CODE", result.data);
      console.log("result---" + result.data);
    }
  },
  async userRegister({ commit }, data) {
    let result = await reqUserRegister(data);
    console.log(result);
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
