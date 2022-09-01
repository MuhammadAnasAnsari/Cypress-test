const { ɵCodegenComponentFactoryResolver } = require ('@angular/core')
const { defineConfig } = require ('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  video :false,
  projectId: 'z3rucx',
  viewportHeight: 768,
  viewportWidth: 1024,
  e2e: {                     
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: "http://localhost:4200",
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: "**//advancedexamples//*",
     }
  })
