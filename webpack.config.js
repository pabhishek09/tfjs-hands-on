var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images', to: path.resolve(__dirname, 'dist/assets/images') }, 
      ]
    })
  ]
}
