const path = require('path');
const webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      loader: '@ngtools/webpack'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new AotPlugin({
      mainPath: path.resolve(__dirname, '../src/manager.ts'),
      tsConfigPath: path.resolve(__dirname, '../tsconfig.json')
    })
  ]
};
