const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://blogdoagi.com.br/',
    video: false,
    screenshotOnRunFailure: true,
    supportFile: false,
    allowCypressEnv: false
  },
});