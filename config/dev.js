const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    watchContentBase: true
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ]
};
