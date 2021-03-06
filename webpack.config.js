// Import Webpack npm module
const webpack = require('webpack');
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        app: './index.jsx',
        vendor: [
            "axios",
            "bootstrap",
            "moment",
            "popper.js",
            "react",
            "react-dom",
            "react-redux",
            "redux",
            "redux-saga"
        ]
    },


    // Which file types are in our project, and where they are located
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Where to output the final bundled code to
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        sourceMapFilename: 'bundle.map.js'
    },
    devtool: '#source-map',
    module: {
        // How to process project files with loaders
        loaders: [
            // Process any .js or .jsx file with Babel
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|ico|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                // options: {
                //   limit: 10000
                // }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            {name: 'vendor', filename: 'vendor.bundle.js'}),

        new CopyWebpackPlugin([
            {from: 'index.html', to: 'index.html'},
            {from: './pic', to: './pic'}
        ])
    ]
}
