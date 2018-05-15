var path = require('path');
// var webpack = require('webpack');
var pkg = require('./package.json');

module.exports = {
    devtool: 'source-map',
    entry: {
        // Widget's entry point and all source code
        main: path.resolve(__dirname, './src/index'),
        // Vendors entry point (shared libraries React, Redux...).
        vendors: Object.keys(pkg.dependencies)
    },
    output: {
        // Generate UMD module to be compatible with WAB(Dojo) module loader.
        libraryTarget: 'amd',
        path: path.resolve(__dirname, ''),
        publicPath: '/',
        filename: 'dist/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: [
        // Exclude Dojo, Esri and WAB modules from build process.
        function checkExternal(context, request, callback) {
            var externals = [
                'dojo',
                'dojox',
                'dijit',
                'dgrid',
                'dstore',
                'esri',
                'jimu'
            ];

            var isExternal = externals.reduce(function (prevValue, nextValue) {
                return prevValue || new RegExp('^' + nextValue).test(request);
            }, false);

            isExternal ? callback(null, 'amd ' + request) : callback();
        }
    ]
};