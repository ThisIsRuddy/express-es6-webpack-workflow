const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/server.js',
    target: 'node',
    plugins: [
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } })
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server.bundle.min.js'
    },
    devtool: 'eval'
};