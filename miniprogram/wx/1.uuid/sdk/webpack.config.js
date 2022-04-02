const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

module.exports = {
    entry: './index.js',
    mode: 'production',
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'wxsdk.js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        alias: {
            uuid: path.resolve(__dirname, 'node_modules/uuid/dist/esm-browser/index.js')
        }
    },
    module: {
        rules: [
            {
                test: /node_modules\/uuid\/dist\/esm-browser\/rng.js$/,
                use: [path.resolve(__dirname, './uuid-rng-loader.js')]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}