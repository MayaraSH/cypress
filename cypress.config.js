const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorios',
    overwrite: false,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss'
  },
});
