/*eslint-disable no-var*/

var path = require('path');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: {
      index: '/'
    }
  },
  entry: {
    main: [
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new AureliaWebpackPlugin({
      includeSubModules: [
        { moduleId: 'aurelia-i18n' },
        { moduleId: 'aurelia-validatejs' },
        { moduleId: 'aurelia-dialog' },
        { moduleId: 'aurelia-notification' }
      ]
    }),
    new ProvidePlugin({
      Promise: 'bluebird',
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery' // this doesn't expose jQuery property for window, but expose it to every module
    })
  ],
  resolve: {
    root: path.resolve('./src')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules|local_packages/, query: { presets: ['es2015-loose', 'stage-1'], plugins: ['transform-decorators-legacy'] } },
      { test: /\.css$/, loader: 'raw' },
      //{ test: /aurelia-dialog\/dist\/commonjs\/dialog\.css/, loader: 'raw'},
      //{ test: /\.css$/, exclude: /aurelia-dialog\/dist\/commonjs\/dialog\.css/, loader: 'style!css' },
      //{ test: /\.less$/, loader: "style!css!less"},
      { test: /\.html$/, loader: 'html' },
      { test: /\.(png|gif|jpg)$/, loader: 'url?limit=8192' },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff2' },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' }
    ]
  }
};
