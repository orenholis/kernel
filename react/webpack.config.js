module.exports = {
  module: {
    rules: [{
      /*
      Process all .js and .jsx files using Babel
      (transpiles special JSX syntax into standard JavaScript that is understood by browsers)
      */
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
           presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },

  /*
  Entry script for webpacking
  (this script and all its imports will be included in the application bundle)
   */
  entry: './pages/src/main.jsx',

  /*
  Output script
  (webpack will produce one big JS file with all imported and transpiled scripts here)
   */
  output: {
    path: __dirname + '/pages',
    filename: 'bundle.js'
  },

  /*
  Nicer in-browser debugging in development mode
   */
  devtool: 'source-map'
};