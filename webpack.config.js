const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [new BundleAnalyzerPlugin()],//只有在生产环境下才运行插件
    externals: {
      //不参与打包的第三方库
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      axios: "axios",
    },
  };
} else {
  module.exports = {};
}