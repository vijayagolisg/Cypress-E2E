module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    }, 
  },


  env:{
    URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register',
    URL1:'https://practicetestautomation.com/practice-test-login/'
  }
};
