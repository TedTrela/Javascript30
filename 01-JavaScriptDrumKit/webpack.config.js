var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'junk'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/sounds'),
        to: path.resolve(__dirname, 'junk/sounds')
      }
    ])
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.wav$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  }
};
