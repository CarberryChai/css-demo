module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|JPG)(\?.*)?$/)
      .end()
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://app.yiwugou.com',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      '/upload': {
        target: 'http://localhost:7001',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
}
