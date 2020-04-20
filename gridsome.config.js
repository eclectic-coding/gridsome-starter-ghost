// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Ghost Starter',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',

  templates: {
    GhostPost: '/:title',
    GhostTag: '/tag/:slug'
  },

  plugins: [
    {
      use: '@gridsome/source-ghost',
      options: {
        baseUrl: 'http://localhost:2369',
        contentKey: process.env.GRIDSOME_GHOST_CONTENT_API,
        routes: {
          post: '/:slug',
          page: '/:slug'
        }
      }
    }
  ]
}
