const page = {
  enterEmail: (email) => {
    browser
      .element("[placeholder='enter your email']")
      .setValue(email);
  },
  enterPassword: (password) => {
    browser
      .element("[placeholder='enter your password']")
      .setValue(password);
  },
  confirmPassword: (password) => {
    browser
      .element("[placeholder='confirm your password']")
      .setValue(password);
  },
  viewError: () => {
    const element = browser.element(".error");
    element.waitForText();
    const error = element.getText();
    return error;
  }
};

module.exports = page;
