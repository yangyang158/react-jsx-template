const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const commom = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')

let prodConfig = {
    mode: 'production',
    module: {  
        rules: [{
            test: /\.(le|sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    'options': {
                        publicPath: '../',
                    }
                }
                , 
                {
                    'loader': 'css-loader',
                    'options': {
                        sourceMap: true,
                    }
                },
                { 
                    loader: 'postcss-loader', 
                    options: { 
                        ident: 'postcss',
                        sourceMap: true,
                        plugins: [
                            require('autoprefixer'),// 给css添加前缀
                        ]
                    } 
                },
                {
                    'loader': 'less-loader',
                    'options': {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
			filename: 'css/[name].[hash:8].css',
			chunkFilename: 'css/[id].[hash:8].css'
        }),
    ],
    // 优化
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, 
            }),
            new OptimizeCSSAssetsPlugin({}) 
        ],
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks:{
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js[x]?/
                },
                styles: {
                    name: 'styles',
                    test: /\.(less|css)$/,
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
}
module.exports = merge(commom, prodConfig)