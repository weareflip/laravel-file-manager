const path = require('path');
const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {
  output: {
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: '@ngtools/webpack'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),

    new AotPlugin({
      entryModule: path.resolve(__dirname, '../src/app/manager.module#ManagerModule'),
      tsConfigPath: path.resolve(__dirname, '../tsconfig.json')
    })
  ]
};
