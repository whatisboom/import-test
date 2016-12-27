var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, '.');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['','.js','.jsx']
    }
};

module.exports = config;