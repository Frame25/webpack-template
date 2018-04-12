ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = () => {
  return {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      // use style-loader in development
      fallback: "style-loader",
      use: [
        {loader: "css-loader"},
        {
          loader: 'postcss-loader',
          options: {
              plugins: [
                  autoprefixer({
                      browsers:['ie >= 8', 'last 4 version']
                  })
              ],
              sourceMap: true
          }
        },
        {loader: 'csscomb-loader'},
        {loader: "sass-loader"}
      ]
    })
  }
}