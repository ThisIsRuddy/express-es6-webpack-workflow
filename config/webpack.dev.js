const path = require('path');
const webpack = require('webpack');
const NoDemonPlugin = require('nodemon-webpack-plugin');
module.exports = {
    entry: './src/server.js',
    target: 'node',
    externals: path.join(__dirname, '../node_modules'),
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
        new NoDemonPlugin()
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server.bundle.dev.js'
    },
    watchOptions: {
        poll: 1000
    },
    devtool: 'source-map'
};