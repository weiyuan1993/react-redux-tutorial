var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry:'./src/index.js',
  output: {
    path: 'src',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
          presets: ['es2015', 'react']
        }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './src/'
  }
};
