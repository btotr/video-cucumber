var chai = require('chai');
var expect = chai.expect;


module.exports = function () {

    this.World = require("../support/world.js").World;

    
    
    const VIDEO_URL = "http://webservices.rendercast.com/media/mute.webm";
    
    var networkStates = ["NETWORK_EMPTY", "NETWORK_IDLE", "NETWORK_LOADING", "NETWORK_NO_SOURCE"];
    var readyStates = ["HAVE_NOTHING", "HAVE_METADATA", "HAVE_CURRENT_DATA", "HAVE_FUTURE_DATA", "HAVE_ENOUGH_DATA"];
    
    this.Given("the video player is loaded", function (done) {
        // done in world
        done();
    });
    
    this.When("i request the network state", function (done) {
        this.browser
            .getAttribute("#player", "networkState")
            .then(function(state) {
                expect(state).to.not.be.undefined;
                this.arguments = [networkStates[state]];
                done();
            }.bind(this));
    });
    
    this.Then(/^i should see the state: ([^"]*)$/, function (networkState) {
        expect(this.arguments[0]).to.equal(networkState);
    });
    
        
    this.Then(/^i should get a ([^"]*) event$/, function (event) {
        expect(this.arguments[1]).to.equal(event);
    });
    
    this.When("i set the video source", function (done) {
        this.browser
            .timeoutsAsyncScript(15000)
            .selectorExecuteAsync("//video", function(videos, url, callback){
                    var player = videos[0];
                    player.addEventListener('loadstart', function(e){
                        callback(e.target.networkState);
                    }, false);
                    player.src = url;
                    player.play();
                }, VIDEO_URL)
            .then(
                function(res){
                    this.arguments = [networkStates[res], "loadstart"];
                }.bind(this), 
                function(error){
                    console.error(error)
                })
            .call(done)
    });
    
    
}