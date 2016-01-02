var webpack = require('webpack')
var config = require('./webpack.config')
var webpackDevServer = require('webpack-dev-server')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3005, 'localhost');
