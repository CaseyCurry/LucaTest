const { defineSupportCode } = require("cucumber");
const reporter = require("cucumber-html-reporter");

defineSupportCode(function({ After, registerHandler }) {
  After(function() {
    return this.driver.quit();
  });

  registerHandler("AfterFeatures", function(features, callback) {
    var options = {
      theme: "bootstrap",
      jsonFile: "cucumber-report.json",
      output: "cucumber-report.html",
      reportSuiteAsScenarios: true,
      launchReport: false
    };
    reporter.generate(options);
    callback();
  });
});
