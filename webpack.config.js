const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: [
    './scripts/main.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/, /scripts/],
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },

      {
        test: /\.(jpe?g|png|svg|woff2?|tff|eot)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|svg|woff2?|tff|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          publicPath: 'images'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    })
  ]
};
