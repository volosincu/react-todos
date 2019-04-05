const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

//loaders
const htmlLoader = require('./webpack-modules/loaders/html.js');
const babelLoader = require('./webpack-modules/loaders/babel.js');


module.exports = {
    mode: "development",
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: false, // path.join(__dirname, 'static-files-folder'),
        compress: true,
        port: 9000
    },
    ...htmlLoader,
    plugins: [ new HtmlWebPackPlugin({ template: path.resolve(__dirname, 'index.html') }) ]
};
