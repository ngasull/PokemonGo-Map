const rootDir = __dirname + '/../'

module.exports = {

  context:  rootDir + 'src',

  entry: [
    './js/pogom.js',
  ],

  output: {
    path:     rootDir + 'dist/js',
    filename: 'pogom.js',
  },

  module: {
    loaders: [{
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file'
    }]
  },

  plugins: [],
}
