const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const jsConfig = require('./webpack/js.js')
const cssConfig = require('./webpack/css.js')
const sassConfig = require('./webpack/sass.js')
const vueConfig = require('./webpack/vue.js')
const pugConfig = require('./webpack/pug.js')
const imgConfig = require('./webpack/img.js')
const fontsConfig = require('./webpack/fonts.js')

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css'
})

module.exports = {
  entry: {
    index: './src/pages/index/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [ jsConfig(), cssConfig(), sassConfig(), vueConfig(), pugConfig(), fontsConfig(), imgConfig() ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/pages/index/index.pug',
      chunks: ['index']
    }),
    extractSass
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}
