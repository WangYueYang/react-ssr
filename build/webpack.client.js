const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/client/Index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test:/\.ts(x)?/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  }
}