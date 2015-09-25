var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    host: 'ondemand.saucelabs.com',
    port: 80,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    logLevel: 'silents'
}
var World = function World(callback) {
    this.arguments = [];
    this.browser = webdriverio.remote(options).init().call(callback);
};

exports.World = World;