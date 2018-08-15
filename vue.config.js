const path = require('path');
module.exports = {
    configureWebpack: {
		resolve: {
			alias: {
				'@components': path.resolve(__dirname, 'src/components/'),
				'@styles': path.resolve(__dirname, 'src/assets/styles/'),
			},
		},
	},

    baseUrl: undefined,
    outputDir: undefined,
    assetsDir: 'src/assets',
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined,

    pwa: {
      name: 'k\'s minesweeper'
    }
};
