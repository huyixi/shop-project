import requests from "./requests";
import mockRequests from "./mockRequests";

export const reqMyCategoryList = () =>
  mockRequests({ url: "/myCategoryList", method: "get" });

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
