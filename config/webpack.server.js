const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, '../src/server/app.tsx'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../dist')
  },
  target: 'node',
  externals: [nodeExternals()],
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
  }
}