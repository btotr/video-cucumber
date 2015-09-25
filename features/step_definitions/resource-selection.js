var chai = require('chai');
var expect = chai.expect;

module.exports = function () {
    
    this.World = require("../support/world.js").World;
    
    const url = "http://188.226.244.202:8000/src/";
    const VIDEO_URL = "http://webservices.rendercast.com/media/mute.webm";
    
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
                this.arguments = [networkStates[state]]
                done();
            }.bind(this))
        }.bind(this));
    });
    
    this.Then(/^i should see the state: ([^"]*)$/, function (networkState, done) {
        expect(this.arguments[0]).to.equal(networkState);
        done();
    });
    
    this.When("i set the video source", function (done) {
        executeAsync('var callback = arguments[arguments.length - 1]; var video = document.getElementsByTagName("video")[0]; video.src = '+VIDEO_URL+'; video.addEventListener("loadstart", function(e){callback(e)})', "",function(error, response){
            console.log(response);
            done();
        })
    });
}