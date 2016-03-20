'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/app/main',
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  watch: NODE_ENV == 'development',
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.es6\.js$/,
        loader: "babel"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel'
      },
      //{
      //  context: './build',
      //  test: /\.html$/,
      //  loader: 'file?name=[name].[ext]'
      //},
      {
        //context: './build',
        test: /\.css/,
        loader: 'style!css?localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
};