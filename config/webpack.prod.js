const path = require('path');
const webpack = require('webpack');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    target: 'node',
    module: {
        rules: [{
            test: /\.js?$/,
            loaders: [
                'babel-loader?presets[]=es2015'
            ],
            exclude: path.join(__dirname, '../node_modules')
        }]
    },
    externals: path.join(__dirname, '../node_modules'),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new UglifyJsWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server.bundle.js'
    }
};