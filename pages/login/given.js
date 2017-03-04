"use strict";

module.exports = function given() {
  this.Given(
    /^I choose to register$/,
    (done) => {
      pages.login.clickRegister();
      done();
    }
  );
};
