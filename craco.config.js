const path = require('path')
const webpack = require('webpack')
const { whenProd } = require('@craco/craco')
const { resolve } = require('path')

const isDev = true
const phase = 'dev'
const assetPath = '/'

module.exports = function () {
  return {
    webpack: {
      configure: (webpackConfig) => {
        return {
          ...webpackConfig,
          output: {
            ...webpackConfig.output,
            publicPath: '/',
          },
        }
      },
      alias: {
        '@': resolve('src'),
      },
      //devtool: isDev ? 'module-source-map': false,
      plugins: [
        new webpack.DefinePlugin({
          PHASE: JSON.stringify(phase),
          ASSET_PATH: JSON.stringify(assetPath),
          'process.env.ASSET_PATH': JSON.stringify(assetPath),
        }),
      ],
    },
    devServer: (devServerConfig) => {
      return {
        ...devServerConfig,
        //        proxy: [
        //          {
        //            context: ['/v1', '/users'],
        //            target: 'http://localhost:3309',
        //            changeOrigin: true,
        //          },
        //        ],
      }
    },
  }
}
