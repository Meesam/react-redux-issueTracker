const webpack = require('webpack');
const path=require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports = {
entry: './public/src/index.js',
  output: {
    path:'./public/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react','stage-0'],
           plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
       {
        test:/\.css$/,
         exclude: /node_modules/,
        loader:ExtractTextPlugin.extract({
          fallbackLoader:'style-loader',
          loader:'css-loader!sass-loader'
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf?(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.eot?(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "url-loader?limit=100000" },
      { test: /\.bmp$/, loader: "url-loader?limit=100000" },
      { test: /\.gif$/, loader: "url-loader?limit=100000" },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
    ]
  },
  watch:true,
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new ExtractTextPlugin({filename:'stylebundle.css'}),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),*/
    new webpack.HotModuleReplacementPlugin(),

  ]
}

