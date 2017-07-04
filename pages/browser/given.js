"use strict";

module.exports = (Given) {
  Given("I open the home page", () => {
    return this.driver.get("http://localhost:13000");
  });
};
