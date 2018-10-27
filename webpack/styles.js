const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const sorting = require('postcss-sorting')

module.exports = env => {
  return {
    test: /\.(sa|sc|c)ss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            // url: false,
            minimize: env && env === 'prod',
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              sorting(),
              autoprefixer({
                browsers: ['ie >= 8', 'last 4 version']
              })
            ],
            sourceMap: true
          }
        },
        { loader: 'sass-loader' }
      ]
    })
  }
}
