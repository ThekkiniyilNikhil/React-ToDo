const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname+'/dist'),
        filename: "reactgame.js"
    },
    resolve: {
        extensions: ['.jsx', '.html', '.js']
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:{
                    loader: "css-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/index.html'
        })
    ]
};