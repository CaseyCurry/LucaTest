const page = {
  selectBudget: () => {
    browser
      .element("[href='Budget']")
      .click();
  }
};

module.exports = page;
