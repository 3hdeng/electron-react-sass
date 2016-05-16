// webpack.config.js
var webpack = require('webpack');
var path= require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    /*entry: './entry.js',

      output: {
      filename: 'bundle.js',
      path: __dirname + '/build',
      publicPath: 'http://localhost:8080/build/'
      },*/
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'datepicker.js'
    },


    module: {
        loaders: [
        { 
            test: /\.js$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/ ,
            query: {
                presets: ['es2015', 'react']
            }
        },
        { test: /\.scss$/, 
            loader: 'style-loader!css-loader!sass-loader' }
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }

};
