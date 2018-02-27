var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            // loader: 'style-loader/url',
            // loader: 'style-loader/useable',
            loader: 'style-loader',
            options: {
              // insertInto: '#app',
              singleton: true,
              transform: './css.transform.js'
            }
          },
          {
            loader: 'css-loader',
            // loader: 'file-loader',
            options: {
              minimize: true, 
              modules: true,
              localIdentName: '[path][name]_[local]_[hash:base64:5]'
            }
          }
        ]
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       // loader: 'style-loader/url',
      //       // loader: 'style-loader/useable',
      //       loader: 'style-loader',
      //       options: {
      //         // insertInto: '#app',
      //         singleton: true,
      //         transform: './css.transform.js'
      //       }
      //     },
      //     {
      //       loader: 'css-loader',
      //       // loader: 'file-loader',
      //       options: {
      //         minimize: true, 
      //         modules: true,
      //         localIdentName: '[path][name]_[local]_[hash:base64:5]'
      //       }
      //     },
      //     {
      //       loader: 'less-loader'
      //     }
      //   ]
      // },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              // insertInto: '#app',
              singleton: true,
              transform: './css.transform.js'
            }
          },
          use: [
            {
              loader: 'css-loader',
              // loader: 'file-loader',
              options: {
                minimize: true, 
                modules: true,
                localIdentName: '[path][name]_[local]_[hash:base64:5]'
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: false
    })
  ]
}