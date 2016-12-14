var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: debug ? "inline-sourcemap" : null,
  output: {
    path: __dirname + 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  output: {
    path: path.join(__dirname, "src"),
    filename: "main.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};