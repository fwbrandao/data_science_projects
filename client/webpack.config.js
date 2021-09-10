const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: './index.js',
    module: {
        rules: []
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.EnvironmentPlugin({
            'NODE_ENV': 'production'
        })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}