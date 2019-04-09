const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
    test: /\.css$/,
    use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        { loader: 'postcss-loader',
          options: {
              plugins: () => [
                  postcssCustomProperties({
                      /*exportTo: './dist/colors.css'*/
                  })
              ]
          } }
    ]
};
