const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require("path")

const isProduction = process.env.NODE_ENV !== 'development'
const cdn = {
  css: [],
  js: [
    'https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js',
    'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
    'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
    'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
  ]
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  indexPath: './',
  lintOnSave: true,
  transpileDependencies: true,
  productionSourceMap: false, //设置为false则不生成.map文件,减少文件体积
  // chainWebpack: config => { 
  //   //压缩图片
  //   config.module
  //     .rule('images')
  //     .use('image-webpack-loader')
  //     .loader('image-webpack-loader')
  //     .options({ bypassOnDebug: true })
  //     .end()
  // },
  // configureWebpack: config => {
  //   // 生产环境相关配置
  //   if (isProduction) {
  //     // 代码压缩
  //     config.plugins.push(
  //         new UglifyJsPlugin({
  //             uglifyOptions: {
  //               //生产环境自动删除console
  //               compress: {
  //                 warnings: false, // 若打包错误，则注释这行
  //                 drop_debugger: true,
  //                 drop_console: true,
  //                 pure_funcs: ['console.log']
  //               }
  //             },
  //             sourceMap: false,
  //             parallel: true
  //         })
  //     )
      // gzip压缩
      // const productionGzipExtensions = ['html', 'js', 'css']
      // config.plugins.push(
      //   new CompressionWebpackPlugin({
      //       filename: '[path].gz[query]',
      //       algorithm: 'gzip',
      //       test: new RegExp(
      //           '\\.(' + productionGzipExtensions.join('|') + ')$'
      //       ),
      //       threshold: 10240, // 只有大小大于该值的资源会被处理 10240
      //       minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      //       deleteOriginalAssets: false // 删除原文件
      //   })
      // )
      // 公共代码抽离
    //   config.optimization = {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 chunks: 'all',
    //                 test: /node_modules/,
    //                 name: 'vendor',
    //                 minChunks: 1,
    //                 maxInitialRequests: 5,
    //                 minSize: 0,
    //                 priority: 100
    //             },
    //             common: {
    //                 chunks: 'all',
    //                 test: /[\\/]src[\\/]js[\\/]/,
    //                 name: 'common',
    //                 minChunks: 2,
    //                 maxInitialRequests: 5,
    //                 minSize: 0,
    //                 priority: 60
    //             },
    //             styles: {
    //                 name: 'styles',
    //                 test: /\.(sa|sc|c)ss$/,
    //                 chunks: 'all',
    //                 enforce: true
    //             },
    //             runtimeChunk: {
    //                 name: 'manifest'
    //             }
    //         }
    //     }
    //   }
    // }
  // },
}
