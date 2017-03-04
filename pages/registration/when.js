"use strict";

module.exports = function when() {
  this.When(
    /^I enter email address "([^"]*)?"$/,
    (email, done) => {
      pages.registration.enterEmail(email);
      done();
    }
  );
  this.When(
    /^I enter password "([^"]*)?"$/,
    (password, done) => {
      pages.registration.enterPassword(password);
      done();
    }
  );
  this.When(
    /^I confirm password "([^"]*)?"$/,
    (password, done) => {
      pages.registration.confirmPassword(password);
      done();
    }
  );
};
