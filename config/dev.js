const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: 'polyfills.ts',
    manager: 'manager.ts',
    uploader: 'uploader.ts',
  },
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
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    )
  ]
};
