const path = require('path')
const BundleTracker = require('webpack-bundle-tracker')
const ExtractText = require('extract-text-webpack-plugin')
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'frontend/src/js/index.tsx'),

  output: {
    path: path.join(__dirname, 'frontend/dist/'),
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
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },      
      {
        test: /\.(sa|sc|c)ss$/,
        use: ExtractText.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })        
      },
      {
        test: /\.(jpg|png|gif|svg|ico|ttf|eot|woff|woff2|otf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000
            }
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.ts(x?)$/,
        loader: "source-map-loader"
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']    
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
    new ExtractText({
      filename: '[name]-[hash].css'
    }),
    new CleanObsoleteChunks(),
  ],

}