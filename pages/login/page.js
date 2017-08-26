const page = {
  clickRegister: () => {
    browser
      .element("[value='Register']")
      .click();
  }
};

module.exports = page;
