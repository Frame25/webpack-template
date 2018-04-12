module.exports = () => {
  return {
    test: /\.js$/,
    loader: 'babel-loader',
    include: /src/,
    query: {
      presets: ["es2015"]
    }
  }
}