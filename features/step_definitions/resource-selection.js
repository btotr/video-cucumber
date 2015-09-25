var chai = require('chai');
var expect = chai.expect;

module.exports = function () {

    this.World = require("../support/world.js").World;
    
    const URL = "http://188.226.244.202:8000/src/";
    const VIDEO_URL = "http://webservices.rendercast.com/media/mute.webm";
    
    var networkStates = ["NETWORK_EMPTY", "NETWORK_IDLE", "NETWORK_LOADING", "NETWORK_NO_SOURCE"];
    var readyStates = ["HAVE_NOTHING", "HAVE_METADATA", "HAVE_CURRENT_DATA", "HAVE_FUTURE_DATA", "HAVE_ENOUGH_DATA"];
    
    this.Given("the video player is loaded", function (done) {
        this.browser
            .url(URL)
            .call(done);
    });
    
    this.When("i request the network state", function (done) {
        this.arguments[0] = "NETWORK_EMPTY"
        done();
    });
    
        
    this.Then(/^i should see the state: ([^"]*)$/, function (networkState, done) {
        expect(this.arguments[0]).to.equal(networkState);
        done();
    });
    
}