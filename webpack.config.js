const {
  path = require('path'),
  HtmlPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin')
} = {}

const {
  jsConfig = require('./webpack/js.js'),
  cssConfig = require('./webpack/css.js'),
  sassConfig = require('./webpack/sass.js'),
  vueConfig = require('./webpack/vue.js'),
  pugConfig = require('./webpack/pug.js'),
  imgConfig = require('./webpack/img.js'),
  fontsConfig = require('./webpack/fonts.js')
} = {}

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css'
})

const jsBundle = {
  entry: {
    index: './src/pages/index/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js'
  }
}

const configs = {
  module: {
    rules: [ jsConfig(), cssConfig(), sassConfig(), vueConfig(), pugConfig(), fontsConfig(), imgConfig() ]
  }
}

const plugins = {
  plugins: [
    new HtmlPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/pages/index/index.pug',
      chunks: ['index']
    }),
    extractSass
  ]
}

const vueResolve = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}

const build = {
  ...jsBundle,
  ...configs,
  ...plugins,
  ...vueResolve
}

const dev = {
  ...build,
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000
  }
}

module.exports = env => {
  if (env === 'prod') {
    return build
  } else if (env === 'dev') {
    return dev
  } else {
    return dev
  }
}
