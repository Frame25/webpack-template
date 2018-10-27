module.exports = () => {
  return {
    test: /\.pug$/,
    use: {
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }
  }
}
