"use strict";

module.exports = function when() {
  this.When(
    /^I try to access a secured area of the site$/,
    (done) => {
      pages.home.selectBudget();
      done();
    }
  );
};
