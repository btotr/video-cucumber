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

var World = function World(done) {
    this.arguments = [];
    this.browser = webdriverio.remote(options).init().call(done);
};

exports.World = World;