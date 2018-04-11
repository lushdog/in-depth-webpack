var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var Purifycss = require('purifycss-webpack')
var glob = require('glob-all')

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true, 
              modules: true,
              localIdentName: '[path][name]_[local]_[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          use: [
            {
              loader: 'css-loader'
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
    }),

    new Purifycss({
      paths: glob.sync([
        path.resolve(__dirname, './*.html'),
        path.join(__dirname, './src/*.js')
      ])
    }),

    new webpack.optimize.UglifyJsPlugin()
  ]
}