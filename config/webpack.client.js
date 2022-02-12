const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../src/client/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist/assets')
  },
  module: {
    rules: [
      {
        test: /ts(x)?/,
        use: 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}