const nodeExternals = require('webpack-node-externals');
const path = require('path');

let configureWebpack = {};

configureWebpack.externals = [
  {
    vue: 'vue'
  },
  nodeExternals(),
  nodeExternals({
    modulesDir: path.resolve(__dirname, 'node_modules')
  })
];


module.exports = {
  publicPath: '',
  outputDir: 'lib',
  assetsDir: '',
  filenameHashing: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  },
  // 通用的configureWebpack配置
  configureWebpack,
  // 通用的chainWebpack配置
  chainWebpack(webpackConfig) {
    webpackConfig.module
      .rule('fonts')
      .use('url-loader')
      .tap(options => Object.assign(options, { limit: 10 }));

    //stylelint
    // webpackConfig
    //   .plugin('stylelint')
    //   .use('stylelint-webpack-plugin')
    //   .tap(() => {
    //     return [
    //       {
    //         configFile: '.stylelintrc',
    //         files: ['packages/**/*.less'],
    //         emitErrors: true
    //       }
    //     ];
    //   });  
  } 
}