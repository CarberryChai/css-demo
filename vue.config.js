module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|JPG)(\?.*)?$/)
      .end()
  },
}
