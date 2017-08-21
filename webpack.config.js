const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const publicPath = '/file_manager/dist/';

module.exports = (env) => webpackMerge(require('./config/' + env + '.js'), {
  entry: {
    polyfills: './src/polyfills.ts',
    manager: './src/manager.ts',
    uploader: './src/uploader.ts',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath,
    jsonpFunction: 'webpackFm',
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].js.map'
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
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new AssetsPlugin({
      filename: 'manifest.json',
      includeManifest: 'manifest',
      path: path.resolve(__dirname, 'public/dist'),
    }),
    new CleanWebpackPlugin('public/dist/*', { watch: true }),
    new webpack.optimize.CommonsChunkPlugin({ name: ['manifest'] }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env || 'dev'),
        'API_LOCATION': JSON.stringify('/file-manager/api/')
      }
    })
  ]
});
