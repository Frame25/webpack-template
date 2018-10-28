const {
  path = require('path'),
  HtmlPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin')
} = {}

const {
  jsConfig = require('./webpack/js.js'),
  stylesConfig = require('./webpack/styles.js'),
  vueConfig = require('./webpack/vue.js'),
  pugConfig = require('./webpack/pug.js'),
  imgConfig = require('./webpack/img.js'),
  fontsConfig = require('./webpack/fonts.js'),
  CopyWebpackPlugin = require('copy-webpack-plugin')
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
    rules: [ jsConfig(), stylesConfig(), vueConfig(), pugConfig(), fontsConfig(), imgConfig() ]
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
    extractSass,
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'static/**/*'),
        to: 'build'
      }
    ])
  ]
}

const resolve = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.jsx', '.vue', '.json']
  }
}

const build = {
  ...jsBundle,
  ...configs,
  ...plugins,
  ...resolve
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
