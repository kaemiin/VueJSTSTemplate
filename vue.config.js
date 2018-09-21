module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#FF3D77',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        }
      }
    }
  }
}
