require('colors');

var wd = require('wd');

var user = process.env.SAUCE_USERNAME;
var key = process.env.SAUCE_ACCESS_KEY;

var remote = wd.remote("http://"+user+":"+key+"@ondemand.saucelabs.com/wd/hub");

remote.on('status', function(info) {
    //console.log(info.cyan);
});

remote.on('command', function(eventType, command, response) {
    //console.log(' > ' + eventType.cyan, command, (response || '').grey);
});

remote.on('http', function(meth, path, data) {
    // console.log(' > ' + meth.magenta, path, (data || '').grey);
});

var World = function World(callback) {  
    this.browser = remote;
    this.browser.init({"browserName":"chrome"}, function() {
        callback();
    });
};

exports.World = World;