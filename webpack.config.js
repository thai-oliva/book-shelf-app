const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const nodeENV = process.env.NODE_ENV || 'production'; /*NODE_ENV='development npm run build'*/

module.exports = {
    entry: {
        app: './src/index.jsx',
    },       
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: path.resolve(__dirname, './node_modules')
        }
    },
    module: {
        rules: [
             {
                test: /\.js|jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: { 
                    presets:  ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                },
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/'
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
     plugins: [
        new ExtractTextPlugin("assets/styles.css"),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true
        }),*/
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('development') }
        })
    ]
}