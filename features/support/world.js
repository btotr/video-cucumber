var webdriverio = require('webdriverio');

var url = "http://188.226.244.202:8000/src/";

// saucelabs
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

// local chrome use ssh tunnel and start driver with:
// chromedriver --whitelisted-ips 188.226.244.202 --url-base=/wd/hub
// ssh -R *:9999:localhost:9515 root@188.226.244.202
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    host: 'localhost',
    port: 9999,
    logLevel: 'verbose'
}

var World = function World(done) {
    this.arguments = [];
    var remote = webdriverio.remote(options)
    this.browser = remote.init().url(url).call(done);
    
};

exports.World = World;