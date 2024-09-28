const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = {
  e2e: {

    watchForFileChanges: false,
    defaultCommandTimeout: 40000,
    requestTimeout: 40000,
    responseTimeout: 40000,
    viewportHeight: 800,
    viewportWidth: 1400,
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/reports",
      "chromeWebSecurity": false,

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', { downloadFile })
    },
    testIsolation: false,
  },
};
