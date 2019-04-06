module.exports = {
    test: /\.css$/,
    use: [
        { loader: 'style-loader', options: { sourceMap: true } },
        { loader: 'css-loader', options: {
            importLoaders: 1, sourceMap: true } },
        { loader: 'postcss-loader', options: { sourceMap: true } }
    ]
};
