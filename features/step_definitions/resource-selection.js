var chai = require('chai');
var expect = chai.expect;

module.exports = function () {
    
    this.World = require("../support/world.js").World;
    
    var url = "http://188.226.244.202:8000/src/";
    
    var networkStates = ["NETWORK_EMPTY", "NETWORK_IDLE", "NETWORK_LOADING", "NETWORK_NO_SOURCE"];
    var readyStates = ["HAVE_NOTHING", "HAVE_METADATA", "HAVE_CURRENT_DATA", "HAVE_FUTURE_DATA", "HAVE_ENOUGH_DATA"];
    
    this.Given("the video player is loaded", function (done) {
        this.browser.get(url, done);
    });
    
    this.When("i request the network state", function (done) {
        this.browser.elementById('player', function (error, video) {
            expect(video).to.not.be.undefined;
            this.browser.getAttribute(video, "networkState", function(error, state){
                expect(state).to.not.be.undefined;
                this.state = networkStates[state]
                done();
            }.bind(this))
        }.bind(this));
    });
    
    this.Then(/^i should see the state: ([^"]*)$/, function (networkState, done) {
        expect(this.state).to.equal(networkState);
        // clean
        this.browser.quit();
        this.state = undefined;
        done();
    });
}