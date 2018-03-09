ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = () => {
  return {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      // use style-loader in development
      fallback: "style-loader",
      use: [
        {loader: "css-loader"}, 
        {loader: "sass-loader"}
      ]
    })
  }
}