const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const sorting = require('postcss-sorting');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {

    //-----------------ENTRYPOINT---------------------//
    entry: {
      index: './src/pages/index/index.js',
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].js?[hash]'
    },

    //-----------------MODULES---------------------//
    module: {
      rules: [
        // JS CONFIG
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: file => (
            /node_modules/.test(file)
          ),
          include: /src/,
          options: {
            presets: ['@babel/preset-env']
          }
        },
        // STYLES CONFIG
        {
          test: /\.sass$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('cssnano')({
                    preset: 'default'
                  }),
                  autoprefixer()
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            }
          ]
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('cssnano')({
                    preset: 'default'
                  }),
                  autoprefixer()
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
            }
          ]
        },
        // PUG CONFIG
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: env === 'development'
              }
            }
          ],
        },
        // FONTS CONFIG
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                // limit: '10000',
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath: '../fonts/'
              }
            }
          ]
        },
        // IMAGES CONFIG
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]?[hash]'
          }
        }
      ]
    },

    //-----------------PLUGINS---------------------//
    plugins: [
      new HtmlPlugin({
        title: 'index',
        filename: 'index.html',
        template: './src/pages/index/index.html',
        chunks: ['index']
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      // new CopyWebpackPlugin([
      //   {
      //     from: path.join(__dirname, 'static/img'),
      //     to: 'img'
      //   }
      // ]),
    ],

    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },

    //-----------------MODULES---------------------//
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9000
    }
  }
}