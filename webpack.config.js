const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const sorting = require('postcss-sorting');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
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
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          ),
          include: /build/
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
                  sorting(),
                  autoprefixer({
                    browsers: ['ie >= 8', 'last 4 version']
                  })
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
                  sorting(),
                  autoprefixer({
                    browsers: ['ie >= 8', 'last 4 version']
                  })
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
            }
          ]
        },
        // VUE CONFIG
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
            options: {
              extractCSS: true,
              loaders: {
                sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=true',
                scss: 'vue-style-loader!css-loader!sass-loader'
              }
            }
          }
        },
        // PUG CONFIG
        {
          test: /\.pug$/,
          oneOf: [
            // this applies to `<template lang="pug">` in Vue components
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader'],
            },
            // this applies to pug imports inside JavaScript
            {
              use: ['raw-loader', 'pug-plain-loader'],
            }
          ]
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
        template: './src/pages/index/index.pug',
        chunks: ['index']
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new VueLoaderPlugin(),
      // new CopyWebpackPlugin([
      //   {
      //     from: path.join(__dirname, 'static/img'),
      //     to: 'img'
      //   }
      // ]),
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default']
      })
    ],

    //-----------------MODULES---------------------//
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9000
    }
  }
}