const webpack = require('webpack');
const path=require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

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
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
      {test: /(\.css-loader|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],include: /flexboxgrid/},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),*/
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

  ],
  watch:true
}

