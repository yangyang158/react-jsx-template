const path = require('path')
const merge = require('webpack-merge')
const prod = require('./webpack.prod.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let analyzerConfig = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}

module.exports = merge(prod, analyzerConfig)