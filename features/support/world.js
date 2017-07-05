"use strict";

const chai = require("chai");
require("chromedriver");
const webdriver = require("selenium-webdriver");
const { defineSupportCode } = require("cucumber");

function CustomWorld() {
  this.driver = new webdriver
    .Builder()
    .forBrowser("chrome")
    .usingServer("http://localhost:4444/wd/hub")
    .build();
  this.expect = (value) => chai.expect(value);
}

defineSupportCode(function({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
})
