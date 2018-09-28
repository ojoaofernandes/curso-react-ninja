const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: [
          /(node_modules)/,
          path.resolve(__dirname, 'src', 'index.js'),
        ],
        loader: "eslint-loader",
        options: {
          "extends": "airbnb",
          emitWarning: true,
          "rules": {
            "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              'react-hot-loader/babel'
            ]
          }
        }
      }
    ]
  }
};
