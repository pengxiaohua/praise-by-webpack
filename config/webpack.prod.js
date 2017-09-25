 // 开发版本
 const webpack = require('webpack');
 const path = require('path');
 const LiveReloadPlugin = require('webpack-livereload-plugin'); //实时更新
 const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 编译css
 const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');// 压缩css
 
 
 module.exports = {
     entry: {
         index: [
             path.join(__dirname, '../src/public/js/index.es6'),
         ],
         tags:[
             path.join(__dirname, '../src/public/js/xpraise.es6'),
         ]
     },
     output: {
         filename: 'public/js/[name]-[hash:5].js',
         path: path.join(__dirname, '../build/')
     },
     module: {
         loaders: [{
             test: /\.es6$/,
             exclude: /(node_modules|bower_components)/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'stage-0']
             }
         }, {
             test: /\.css$/,
             loader: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: 'css-loader'
             })
         }]
     },
     plugins: [
         new webpack.DefinePlugin({
             'process.env': {
                 NODE_ENV: '"prod"'
             }
         }),
         new LiveReloadPlugin({
             appendScriptTag: true
         }),
         new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
         new webpack.optimize.UglifyJsPlugin({  // 压缩js
             compress: {
               warnings: false,
               drop_console: false,
             }
         }),
     ]
 }