// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   publicPath: process.env.NODE_ENV === 'production'
//       ? '/memory_game/'
//       : '/',
//   transpileDependencies: true
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/memory_game/'
      : '/'
}
