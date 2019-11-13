const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        // 不设置path, 则默认输出文件为 dist
        path: path.resolve(__dirname, 'dest'),
        filename: 'js/index.[hash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
			'@utils': path.resolve(__dirname, 'src/utils'),
		}
    },
    // 不打包jquery, 比如：JQuery是从CDN引入的
    // externals: {
    //     jquery: 'JQuery'
    // },
    module: {  
        rules: [{
            // 文件大小<8192KB, 以base64的方式加载图片; 文件大小>8192KB, 以请求的方式加载图片
            test: /\.(png|jpg|gif|svg)(\?[a-z0-9\-=]+)?$/,
            use: [{
                loader: 'url-loader',// 单位：KB
                options: {
                    limit: '8192',
                    outputPath: 'images/',
                    name: '[hash:8].[ext]',
                }
            }, 
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    optipng: {
                        enabled: false,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    webp: {
                        quality: 75
                    }
                }
            }]
        }, {//对JS文件进行编译(包括从ES6转换为ES5)
            test: /\.js$/, 
            exclude: /node_modules|bower_components/,
            loader: 'babel-loader'
        },  {//对jsx文件 编译 成js
            test: /\.jsx$/, 
            loader: 'babel-loader',
            exclude: /node_modules/
        },]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'my-app',
            filename: 'index.html',
            // template: 'index.ejs',
            // template: path.resolve(__dirname, 'htmls/index.ejs'),
            inject: 'body',
            favicon: './src/assets/img/favicon.ico',
            minify: {"removeComments": true, "collapseWhitespace": true},//压缩
            // chunksSortMode: 'none',
            // banner   : {
            //     branch: gitRevision('branch'),
            //     tag: gitRevision('tag'),
            // },
        }),
        new CleanWebpackPlugin('dest')
    ],
    performance: {
        // 配置如何展示性能提示
        hints: 'warning',
        maxAssetSize: 30000000,
        maxEntrypointSize: 50000000,
    }
}