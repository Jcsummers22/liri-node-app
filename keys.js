console.log('this is loaded');
//Twitter API
var twitterKeys = {
  consumer_key: 'gtpOsJTsKLfLjr5tBOk2NwTm8',
  consumer_secret: '8tj296av4IwsgBWN6YjMqjXG9eBsY3Nuk81xD6lbWvvpF76eWO',
  access_token_key: '736684406383906816-8pmkY1HU5xvOmOkR3iW4wC6Py5piBXp',
  access_token_secret: 'vqP9wjRPJpV4voaGmKXHjOaUGzgK7ucpjg2YTvHSstw2j',
}

module.exports = twitterKeys;

//Spotify API 
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: '41101943257b40668b21648ef337eec2',
 secret: "79d2f6974600409b806957a05d1c251d"
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data); 
});