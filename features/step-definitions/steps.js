"use strict";

const webdriver = require("selenium-webdriver");
const { defineSupportCode } = require("cucumber");

defineSupportCode(function({ Given, When, Then, setDefaultTimeout }) {
  setDefaultTimeout(10 * 1000);

  Given("I open the home page", function() {
    return this.driver.get("http://localhost:13000");
  });

  When("I try to access a secured area of the home page", function() {
    return this.driver
      .findElement({ xpath: "//a[@href='Budget']" })
      .then(function(element) {
        return element.click();
      });
  });

  Given("I choose to register", function() {
    return this.driver
      .findElement({ xpath: "//input[@value='Register']" })
      .then(function(element) {
        return element.click();
      });
  });

  When("I enter email address {stringInDoubleQuotes}", function(email) {
    return this.driver
      .findElement({ xpath: "//input[@placeholder='enter your email']" })
      .then(function(element) {
        return element.sendKeys(email);
      });
  });

  When("I enter password {stringInDoubleQuotes}", function(password) {
    return this.driver
      .findElement({ xpath: "//input[@placeholder='enter your password']" })
      .then(function(element) {
        return element.sendKeys(password);
      });
  });

  When("I confirm password {stringInDoubleQuotes}", function(password) {
    return this.driver
      .findElement({ xpath: "//input[@placeholder='confirm your password']" })
      .then(function(element) {
        return element.sendKeys(password);
      });
  });

  Then("I expect to see an error indicating my password is too weak", function() {
    const expect = this.expect;
    const expectedError = "too weak";
    const condition = webdriver
      .until
      .elementLocated({ className: "error" });
    return this.driver
      .wait(condition, 5000)
      .then(function(element) {
        return element.getText()
          .then(function(text) {
            expect(text)
              .to
              .contain(expectedError);
          });
      });
  });

  Then("I expect to see an error indicating my passwords do not match", function() {
    const expect = this.expect;
    const expectedError = "don't match";
    const condition = webdriver
      .until
      .elementLocated({ className: "error" });
    return this.driver
      .wait(condition, 5000)
      .then(function(element) {
        return element.getText()
          .then(function(text) {
            expect(text)
              .to
              .contain(expectedError);
          });
      });
  });
});
