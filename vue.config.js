const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	publicPath: './',
    assetsDir: 'assets',
	outputDir: 'docs',
	productionSourceMap: false,
	lintOnSave: false,
	transpileDependencies: true,
	css: {
		loaderOptions: {
		  less: {
			lessOptions: {
			  javascriptEnabled: true,
			}
		  }
		}
	  },
	chainWebpack: config => {
		config.plugin('html').tap(args => {
            args[0].title = '吉米网 | 走进一个Web3时代'
            return args
        })
		config.plugin('copy').tap(args => {
			
		})
	}
})
