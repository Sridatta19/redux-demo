var webpack = require('webpack');
var path = require('path');

const BABEL_QUERY = {
  presets: ['react', 'es2015'],
  plugins: [
    ['transform-object-rest-spread'],
    ['transform-class-properties'],
    ['transform-decorators-legacy'],
    [
      'react-transform',
      {
        transforms: [
          {
            transform: 'react-transform-hmr',
            imports:    ['react'],
            locals:     ['module']
          }
        ]
      }
    ]
  ]
}

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3005',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: BABEL_QUERY
      },
      {
        test: /\.sass?$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      }
    ]
  }
}
