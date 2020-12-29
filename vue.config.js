const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    hot: true,
    inline: true,
    hotOnly: true,
    proxy: {
      "/dev-api": {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          "^/dev-api": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@components", resolve("src/components"))
      .set("@assets", resolve("src/assets"))
      .set("@views", resolve("src/views"))
      .set("@directives", resolve("src/directives"))
      .set("@utils", resolve("src/utils"))
      .set("@layout", resolve("src/layout"))
      .set("@store", resolve("src/store"))
      .set("@styles", resolve("src/styles"))
      .set("@api", resolve("src/api"));
  },
};
