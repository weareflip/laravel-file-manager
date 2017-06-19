const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const publicPath = '/file_manager/';

module.exports = (env, api) => webpackMerge(require('./config/' + env + '.js'), {
  entry: {
    polyfills: 'polyfills.ts',
    vendor: 'vendor.ts',
    manager: 'manager.ts'
  },
  output: {
    publicPath,
    filename: 'js/[name].[hash].js',
    sourceMapFilename: 'js/[name].[hash].map'
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'raw-loader'
    }, {
      test: /\.s?css$/,
      loaders: ExtractTextPlugin.extract({
        fallback: 'style-loader', use: 'css-loader?-url!resolve-url-loader?root!sass-loader?sourceMap'
      })
    }, {
      test: /\.woff2?$/,
      include: path.resolve(__dirname, 'src/fonts'),
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }, {
      test: /\.(png|gif|jpe?g|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]'
      }
    }, {
      test: /icons\.json$/,
      loaders: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'webfonts-loader',
            options: {
              fileName: 'fonts/[fontname].[hash].[ext]'
            }
          }
        ]
      })
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
    new ExtractTextPlugin('css/[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({ name: ['manifest'] }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env || 'dev'),
        'API_LOCATION': JSON.stringify('/file-manager/api/')
      }
    })
  ]
});
