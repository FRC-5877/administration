var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = [{
  entry: APP_DIR + '/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    path: BUILD_DIR,
    filename: 'style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      include: APP_DIR,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css'
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { 
          loader: 'sass-loader',
          options: {
            includePaths: ['./node_modules']
          }
        },
      ]
    }]
  },
},
{
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}];