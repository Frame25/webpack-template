module.exports = () => {
  return {
    test: /\.(js|jsx)?$/,
    loader: 'babel-loader',
    include: /src/,
    exclude: '/node_modules/',
    query: {
      presets: ['es2015', 'react']
    }
  }
}
