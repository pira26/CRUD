'use strict';

const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    context: path.join(__dirname, 'src'),
    entry: ['./Index.jsx'],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/dist', 
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
        modules: [path.join(__dirname, 'node_modules')]
    }                                                                                                                                                                                                                                               
}