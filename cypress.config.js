const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
   specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    baseUrl: 'https://conduit.productionready.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
     env: {
      allureReuseAfterSpec: true,
      snapshotOnly: true,
      download_dir: "./cypress/downloads",
    },
    allureResulsPath: "allure-results",
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
