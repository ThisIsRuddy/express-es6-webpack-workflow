const path = require('path');
const webpack = require('webpack');
const CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './src/index.js'
    ],
    target: 'node',
    module: {
        rules: [{
            test: /\.js?$/,
            loaders: [
                'babel-loader'
            ],
            exclude: path.join(__dirname, '../node_modules')
        }]
    },
    externals: path.join(__dirname, '../node_modules'),
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new StartServerPlugin({
            name: 'server.bundle.js'
        }),
        new CleanObsoleteChunks()
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'server.bundle.js'
    },
    watchOptions: {
        poll: 1000
    }
};