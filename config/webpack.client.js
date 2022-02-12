const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/client/index.tsx'),
  output: {
    filename: 'script/[name].bundle.js',
    path: path.join(__dirname, '../dist/assets')
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?/,
        use: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/client/template/index.html')
    })
  ]
}