var path = require('path');
var config = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'app/index.js'),
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      query: {
        presets: ['react']
      }
    }]
  },

};

module.exports = config;
