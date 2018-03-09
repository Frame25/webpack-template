module.exports = () => {
  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      // use style-loader in development
      fallback: "style-loader",
      use: [
        { loader: "css-loader" }
      ]
    })
  }
}