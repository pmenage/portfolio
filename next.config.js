const withSass = require('@zeit/next-sass')

module.exports = withSass({
  exportPathMap: function () {
    return {
      '/': { page: '/index' },
      '/projects': { page: '/projects' },
      '/about': { page: '/about' }
    }
  }
})