const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const qaConfig = require("./config/qa.json")

function setConfigurationFromFile(config) {
  Object.keys(qaConfig).forEach(key => {
    config[key] = qaConfig[key];
  })
  
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      setConfigurationFromFile(config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      allureWriter(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    }
  },
});
