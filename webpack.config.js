var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeExternals = require('webpack-node-externals');
var path = require('path');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];
var clientLoaders = isProduction ? productionPluginDefine.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, sourceMap: false })
]) : [];

var commonLoaders = [
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];

var dist = path;

module.exports = [
    {
        entry: path.resolve(__dirname, 'src/server.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            publicPath: '/'
        },
        target: 'node',
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false
        },
        externals: nodeExternals(),
        plugins: productionPluginDefine,
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    loaders: ["css-loader", "sass-loader"]
                }
            ].concat(commonLoaders)
        }
    },
    {
        entry: path.resolve(__dirname, 'src/client/view/browser.js'),
        output: {
            path: path.resolve(__dirname, 'dist/assets'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: clientLoaders.concat([
            new ExtractTextPlugin('index.css', {
                allChunks: true
            })
        ]),
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('css-loader!sass-loader')
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.scss']
        }
    }
];
