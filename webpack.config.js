const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath = '/file_manager/';

module.exports = (env, api) => webpackMerge(require('./config/' + env + '.js'), {
  entry: {
    polyfills: 'polyfills.ts',
    manager: 'manager.ts',
    uploader: 'uploader.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath,
    filename: '[chunkhash].js',
    sourceMapFilename: '[chunkhash].js.map'
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'raw-loader'
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.woff2?$/,
      include: path.resolve(__dirname, 'src/fonts'),
      loader: 'file-loader'
    }, {
      test: /icons\.json$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'webfonts-loader'
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      'node_modules',
      'vendor',
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    new AssetsPlugin({
      filename: 'manifest.json',
      includeManifest: 'manifest',
      path: path.join('dist')
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({ name: ['manifest'] }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env || 'dev'),
        'API_LOCATION': JSON.stringify('/file-manager/api/')
      }
    })
  ]
});
