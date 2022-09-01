const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  video :false,
  projectId: 'z3rucx',
  viewportHeight: 768,
  viewportWidth: 1024,
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ["**//advancedexamples//*",
                        "**/__snapshots__/*",
                        "**/__image_snapshots__/*"
                        ],
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    env:{
      "cypress-plugin-snapshots": {
      "imageConfig":{
        "threshold": 0.01,             // Amount in pixels or percentage before snapshot image is invalid
      },
    }
    }
  },
});
