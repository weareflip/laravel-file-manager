const path = require('path');
const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {
  entry: {
    polyfills: 'polyfills.ts',
    manager: 'manager.aot.ts',
    uploader: 'uploader.aot.ts',
  },
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
      tsConfigPath: path.resolve(__dirname, '../tsconfig.aot.json'),
      entryModule: path.resolve(__dirname, '../src/app/manager.module#ManagerModule')
    })
  ]
};
