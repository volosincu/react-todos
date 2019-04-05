const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

//loaders
const htmlLoader = require('./webpack-modules/loaders/html.js');
const babelLoader = require('./webpack-modules/loaders/babel.js');


module.exports = {
    mode: "production",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    ...htmlLoader,
    plugins: [ new HtmlWebPackPlugin({template: path.resolve(__dirname, 'index.html')}) ]
};
