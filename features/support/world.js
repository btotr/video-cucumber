var webdriverio = require('webdriverio');

var url = "http://188.226.244.202:8000/src/";
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
    var remote = webdriverio.remote(options)
    this.browser = remote.init().url(url).call(done);
    
};

exports.World = World;