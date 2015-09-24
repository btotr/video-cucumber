var afterHooks = function () {
  this.After(function (callback) {
    // close browser
    this.browser.quit();
    // arguments are used to pass arguments between the steps
    this.arguments = [];
    callback();
  });
};

module.exports = afterHooks;