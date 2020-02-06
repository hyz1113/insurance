// vue.config.js
const Timestamp = new Date().getTime();
const Compressionlugin=require('compression-webpack-plugin');
module.exports = {
  productionSourceMap:false,//不生成map 文件
  lintOnSave: false, //  lint 错误是否编译警告
  // 基本路径
  publicPath: "./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  outputDir: "dist",  //打包时生成的生产环境构建文件的目录
  assetsDir: "public",  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  /*devServer: {
      proxy: 'http://localhost:8080'
  }*/
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      //publicPath: './',
      filename: `./public/js/[name].${ process.env.VUE_APP_VERSION }.${ Timestamp }.js`,
      chunkFilename: `./public/js/[name].${ process.env.VUE_APP_VERSION }.${ Timestamp }.js`
      //filename: `[name].js`,
      //chunkFilename: `[name].js`
    },
    plugins: [
      new Compressionlugin({
        test:/\.js$|\.html$|\.css/, //匹配文件名
        threshold:10240,//对超过10k 的文件压缩
        deleteOriginalAssets: false,//是否删除原文件
      })
    ]
  },
};
