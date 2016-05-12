// webpack.config.js
var webpack = require('webpack');
var path= require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './entry.js',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/build'
    },

    module: {
        loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolveLoader: {
          root: path.join(__dirname, 'node_modules')
    }

};
