require("dotenv").config();

const bandsIntown = require("./concert");
const spotifyThis = require("./spotify");
const dowhat = require("./do");
const moviethis = require("./concert");


const task = process.argv[2];
const term = process.argv[3];

if (task === 'movie-this') {
  moviethis(term);
  
} else if (task === 'spotify-this-song') {
  spotifyThis(term);

} else if (task === 'concert-this') {
  bandsIntown(term);

} else if (task === 'do-what-it-says') {
  dowhat(term);
}