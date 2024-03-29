/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import MainRouter from '../router/route'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(MainRouter)
}
