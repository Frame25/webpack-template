const path = require('path'),
htmlPlugin = require('html-webpack-plugin'),
merge = require('webpack-merge'),
ExtractTextPlugin = require("extract-text-webpack-plugin");

const jsConfig = require('./webpack/js.js'),
cssConfig = require('./webpack/css.js'),
sassConfig = require('./webpack/sass.js'),
vueConfig = require('./webpack/vue.js'),
pugConfig = require('./webpack/pug.js'),
imgConfig = require('./webpack/img.js');

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css"
});


module.exports = {
  entry: {
    index: './src/pages/index/index.js',
    second: './src/pages/second/second.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [ jsConfig(), cssConfig(), sassConfig(), vueConfig(), pugConfig(), imgConfig() ]
  },
  plugins: [
      new htmlPlugin({
        title: 'index',
        filename: 'index.html',
        template: './src/pages/index/index.pug',
        chunks: ['index']
      }),
      new htmlPlugin({
        title: 'seccond',
        filename: 'second/index.html',
        template: './src/pages/second/second.pug',
        chunks: ['second']
      }),
      extractSass
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
}