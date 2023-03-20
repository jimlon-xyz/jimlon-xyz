const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
    assetsDir: 'assets',
	outputDir: 'docs',
	productionSourceMap: false,
	lintOnSave: false,
	transpileDependencies: true,
	devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    } ,
	css: {
		loaderOptions: {
		  less: {
			additionalData: `
				@import "~@/theme.less";
			`,
			lessOptions: {
			  javascriptEnabled: true,
			}
		  }
		}
	  },
	chainWebpack: config => {

		config.module.rule('images').set('parser', {
			dataUrlCondition: {
				maxSize: -1
			}
		})

		config.plugin('html').tap(args => {
            args[0].title = '吉米网 | 走进一个Web3时代'
            return args
        })
		
		config.plugin('copy').tap(args => {
			args[0].patterns.push({
				from: path.resolve('CNAME'),
				to: path.resolve('docs')
			})
			return args
		})
	}
})
