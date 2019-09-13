const fs =  require('fs');

const doWhat = function dowhat(term) {

  
  fs.readFile("random.txt", "utf8", function(error, data) {
  
    
    if (error) {
      return console.log(error);
    }
 
    console.log(data.split(","));
  
  });
  
  }

    module.exports = doWhat;