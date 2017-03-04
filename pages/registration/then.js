"use strict";

module.exports = function then() {
  this.Then(
    /^I expect to see an error indicating my password is too weak$/,
    (done) => {
      const error = pages.registration.viewError();
      expect(error)
        .to
        .contain("weak");
      done();
    }
  );
  this.Then(
    /^I expect to see an error indicating my passwords do not match$/,
    (done) => {
      const error = pages.registration.viewError();
      expect(error)
        .to
        .contain("don't match");
      done();
    }
  );
};
