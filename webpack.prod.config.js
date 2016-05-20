/*eslint-disable no-var*/

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var pkg = require('./package.json');

var outputFileTemplateSuffix = '-' + pkg.version;

module.exports = {
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]' + outputFileTemplateSuffix + '.js',
    chunkFilename: '[id]' + outputFileTemplateSuffix + '.js',
    publicPath: '/'
  },
  plugins: [
    new AureliaWebpackPlugin({
      includeSubModules: [
        { moduleId: 'aurelia-validatejs' },
        { moduleId: 'aurelia-dialog' }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'Aurelia webpack playground - ' + pkg.version,
      template: 'index.prod.html',
      filename: 'index.html'
    }),
    new ProvidePlugin({
      Promise: 'bluebird',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but expose it to every module
    })
  ],
  resolve: {
    root: [
      path.resolve('./'), path.resolve('./src')
    ]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
      //{ test: /aurelia-dialog\/dist\/commonjs\/dialog\.css/, loader: 'raw'},
      //{ test: /\.css$/, exclude: /aurelia-dialog\/dist\/commonjs\/dialog\.css/, loader: 'style!css' },
      //{ test: /\.css$/, loader: 'style!css' },
      { test: /\.css$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less'},
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
    ]
  }
};
