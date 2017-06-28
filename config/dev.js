const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    watchContentBase: true
  }
};
