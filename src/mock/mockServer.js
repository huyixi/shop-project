import Mock from "mockjs";
// webpack默认对外暴露:JSOM数据格式,图片
import banners from "./banners.json";
import floors from "./floors.json";
import myCategoryList from "./myCategoryList.json";

//mock数据:参数:请求地址,请求的数据
Mock.mock("/mock/banner", {
  code: 200,
  data: banners,
});
Mock.mock("/mock/floors", {
  code: 200,
  data: floors,
});
Mock.mock("/mock/myCategoryList", {
  code: 200,
  data: myCategoryList,
});
