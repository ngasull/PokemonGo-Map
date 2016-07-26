const rootDir = __dirname + '/../'
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  context:  rootDir + 'src',

  entry: [
    './js/pogom.js',
    '../static/sass/main.scss'
  ],

  output: {
    path:     rootDir + 'static/dist/js',
    filename: 'pogom.js',
  },

  module: {
    loaders: [{
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      exclude: /cross\.png$/,
      loader: 'file'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }]
  },

  plugins: [
    new ExtractTextPlugin('../css/app.min.css')
  ],
}
