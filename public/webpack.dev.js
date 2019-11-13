const path = require('path')
const merge = require('webpack-merge')
const commom = require('./webpack.common.js')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let devConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.(le|sa|sc|c)ss$/,
            use: [
                {
                    'loader': 'style-loader'
                }, 
                {
                    'loader': 'css-loader',
                    'options': {
                        sourceMap: true
                    }
                },
                {
                    'loader': 'less-loader',
                    'options': {
                        sourceMap: true
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
                }
            ]
        }]
    },
    devServer: {
        open: true,
        openPage: 'index.html',
        hot: true,// 重新加载改变的部分, 不会刷新浏览器 
        inline: true,// 刷新浏览器 
        compress: true,
        host: '0.0.0.0',
        useLocalIp: true,
        progress: true,
        lazy: false,
        overlay: {// 出现错误 弹出错误信息页面
			warnings: true,
			errors: true
        },
        proxy: {
			'/api/*': {
				target: 'http://localhost:7309'
			},
			'/v3/*': {
				target: 'https://restapi.amap.com/',
				secure: true,  // 如果是https接口，需要配置这个参数
				changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
			},
		}
    },
}

module.exports = merge(commom, devConfig)