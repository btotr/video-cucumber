var afterHooks = function () {
  this.After(function (done) {
    // arguments are used to pass arguments between the steps
    this.arguments = [];
    // refresh browser
    this.browser.end();
    done();
  });
};

module.exports = afterHooks;