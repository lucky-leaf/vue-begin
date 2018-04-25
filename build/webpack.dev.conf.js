const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const webpack = require('webpack')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
