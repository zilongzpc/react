/**
 * Created by zhaopenghodoman on 15/5/27.
 */


var path = require('path');
var node_modules =path.resolve(__dirname,'node_modules');
var pathToReact = path.resolve(node_modules,'react/dist/react.min.js');
var webpack = require('webpack');
//var HtmlwebpackPlugin =require('html-webpack-plugin');
var merge = require('./lib/merge');
var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);
var common = {
    entry :{
        app:path.join(ROOT_PATH,'app/main'),
        vendors:['react']
    },
    resolve:{
        alias:{
            'react':pathToReact
        }

    },

    output:{
        path:path.resolve(ROOT_PATH,'build'),
        filename:'app.js'
    },
    module: {
        noParse:[pathToReact],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'

            }

        ]
    },
    //},
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( 'vendors', 'vendors.js')
    ]
};
var mergeConfig = merge.bind(null,common);
if(TARGET ==='build'){
    module.exports = mergeConfig({
    });
}
if(TARGET ==='dev'){
    module.exports = mergeConfig({
        entry:['webpack/hot/dev-server']
    });
}
