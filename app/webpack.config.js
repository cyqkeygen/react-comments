'use strict';
let webpack = require('webpack');

module.exports = {
  entry: ['src/index.js'],
  output: {
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'map-source',
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      },
      include: /src/
    }]
  }
}