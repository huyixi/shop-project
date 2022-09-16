import requests from "./requests";
import mockRequests from "./mockRequests";

export const reqMyCategoryList = () =>
  mockRequests({ url: "/myCategoryList", method: "get" });

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

export const reqGetBannerList = () =>
  mockRequests({ url: "/banners", methods: "get" });

export const reqGetFloorList = () =>
  mockRequests({ url: "/floorList", methods: "get" });
