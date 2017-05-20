const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('project', '/projects/:slug', 'project')
//routes.add('projects', '/projects/:slug', 'project')