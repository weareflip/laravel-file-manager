const path = require('path');
const webpack = require('webpack');
// const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {
  module: {
    rules: [{
      test: /\.ts$/,
      // loader: '@ngtools/webpack'
      loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    /**
     * JIT Compilation until multiple entry modules are supported.
     *
     * new AotPlugin({
     *   mainPath: path.resolve(__dirname, '../src/manager.ts'),
     *   tsConfigPath: path.resolve(__dirname, '../tsconfig.json')
     * })
     */
  ]
};
