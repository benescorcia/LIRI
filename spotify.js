require("dotenv").config();

const keys = require("./key");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

const spotifyThis = function spotifythis(term) {
  if(!term){
    term = "Hey Jude";
  } 
spotify
  .search({ type: 'track', query: term })
  .then(function(response) {
   
    for(let i = 0; i < 3; i++) {
      console.log(`
        Artist: ${response.tracks.items[i].artists[0].name}
        Song's Name: ${response.tracks.items[i].name}
        Album: ${response.tracks.items[i].album.name}
        Preview: ${response.tracks.items[i].preview_url}
      `)
    }
  })
  .catch(function(err) {
    console.log(err);
  });

}

  module.exports = spotifyThis;
  