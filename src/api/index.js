import requests from "./requests";
import mockRequests from "./mockRequests";

export const reqMyCategoryList = () =>
  mockRequests({ url: "/myCategoryList", method: "get" });

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

export const reqGetBannerList = () =>
  mockRequests({ url: "/banners", method: "get" });

export const reqGetFloorList = () =>
  mockRequests({ url: "/floorList", method: "get" });

export const repGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

export const reqGetGoodDetail = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

export const reqGetCode = (phone) =>
  requests({ url: `/user/passport/sendCode/${phone}`, method: "get" });
//注册接口
export const reqUserRegister = (data) =>
  requests({ url: "/user/passport/register", data, method: "post" });
export const reqAddOrUpdateShopcar = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });
export const reqGetShopcartList = () =>
  requests({ url: "/cart/cartList", method: "get" });
