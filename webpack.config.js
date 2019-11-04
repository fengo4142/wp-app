const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'frontend/src/js/index'),

  output: {
    path: path.join(__dirname, 'frontend/dist'),
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ],
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new ExtractText({
      filename: '[name]-[hash].css'
    }),
  ],

}