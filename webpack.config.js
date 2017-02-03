var webpack = require('webpack');
var path = require('path');
var devFlagPlugin = new webpack.DefinePlugin({  
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
module.exports = {
  entry: [
  './src/index'
  ],
  module: {
    loaders: [
    { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
    { test: /\.s?css$/, loader: 'style!css!sass' },
    { test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
loader : 'file-loader' }     
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  devFlagPlugin
  ]
};
