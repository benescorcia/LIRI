require("dotenv").config();
const fs =  require('fs');

const bandsIntown = require("./concert");
const spotifyThis = require("./spotify");
const moviethis = require("./concert");


let task = process.argv[2];
let term = process.argv[3];

function runner (task, term){
if (task === 'movie-this') {
  moviethis(term);
  
} else if (task === 'spotify-this-song') {
  spotifyThis(term);

} else if (task === 'concert-this') {
  bandsIntown(term);

} else if (task === 'do-what-it-says') {
  dowhat();
}
}
runner(task, term);

function dowhat() {

  
  fs.readFile("random.txt", "utf8", function(error, data) {
  
    
    if (error) {
      return console.log(error);
    }
 
  const newData= data.split(",");
  term = newData[1];
  task = newData[0];
  runner(task, term);
  });
  
  }