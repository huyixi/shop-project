const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      // 一匹配到 /api 就向target网址请求
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn/",
        // pathRewrite: {
        //   "^/api": "", // 重写请求
        // },
      },
    },
  },
  lintOnSave: false,
});
