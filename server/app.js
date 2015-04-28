/**
 * Created by idris on 27/4/15.
 */

//declare a simple async function
function delayedMessge(delay, message, callback) {
	setTimeout(function() {
		callback(null, message);
	}, delay);
}


var getData=function(callback){
	setTimeout(function() {
		callback(null,"Demo of Meteor.wrapAsync function timeout: 3s");
	}, 3000);
};

Meteor.methods({
	'test':function(){
		this.unblock();
		var response = Async.runSync(function(done) {
			setTimeout(function() {
				//console.log("1001");
				done(null, "Demo of Async.runSync function timeout: 6s");
			}, 6000);
		});
		return response.result;
	},
	'test1':function(){
		this.unblock();
		var wrappedDelayedMessage = Async.wrap(delayedMessge);
		var response = wrappedDelayedMessage(9000, "Demo of Async.wrap function timeout: 9s");
		return response;
	},
	'test2':function(){
		this.unblock();
	var res=Meteor.wrapAsync(getData);
		var result= res();
		return result;
	},
	'twit':function() {
		return " ";
	}
});

//Demo of Twitter Streams
	var Twitter = Meteor.npmRequire('twitter');
	var client = new Twitter({
		consumer_key: 'xxxxxxxxxxxxxx',
		consumer_secret: 'xxxxxxxxxxxxx',
		access_token_key: 'xxx-xxxxxxxxxxxxxxx',
		access_token_secret: 'xxxxxxxxxxxxxxxxxxxxxx'
	});

var Fiber = Npm.require('fibers');


	client.stream('user',{with: 'followings'}, function (stream) {
		stream.on('data', function (data) {
			Fiber( function() {
				//Tweets.insert({twits: tweet});
				console.log(data);
			}).run();
		});
	});







