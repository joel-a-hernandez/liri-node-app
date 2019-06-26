var axios = require("axios");
var fs = require('fs');
var Spotify = require('node-spotify-api');
require("dotenv").config();
console.log(process.env.id)
var command = process.argv[2];
var secondCommand = process.argv[3];

switch (command) {
    case ('spotify-this-song'):
        if(secondCommand){
            spotifyThisSong(secondCommand);
         } else{
            spotifyThisSong("Try again!");
         }
    break;
    case ('movie-this'):
        if(secondCommand){
            omdb(secondCommand);
        } else{
            omdb("Try again!");
        }
    break;
    case ('concert-this'):
        if(secondCommand){
            band(secondCommand);
        } else{
            band("Try again!");
        }
    break;
    case ('do-what-it-says'):
        doThing();
   break;
   default:
       console.log('Try again');
  
};

function omdb() {// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + secondCommand + "&y=&plot=short&apikey=trilogy";


axios.get(queryUrl).then(
  function(response) {
    console.log("Title: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nIMdB Rating: " + response.data.imdbRating + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nActors: " + response.data.Actors + "\nPlot: " + response.data.Plot + "\nRotten Tomatoes Rating: " + response.data.tomatoRating);
  })
  .catch(function(error) {
    console.log(error.config);
  });
}
function doThing(){
    fs.readFile('random.txt', "utf8", function(err, data){
   console.log(data)
  
    
    });
}

 

function spotifyThisSong (){
    var spotify = new Spotify({
        id: process.env.id,
        secret: process.env.secret
      });
    spotify.search({ type: 'track', query: secondCommand, limit: 1}, function(error, data){
        if(!error){
            console.log("Artist(s): " + data.tracks.items[0].artists[0].name + "\nSong Name: " + data.tracks.items[0].name + "\nPreview Url: " + data.tracks.items[0].preview_url + "\nAlbum: " + data.tracks.items[0].album.name)
        } else {
        console.log('Error occurred.');
        }
    });
    }

    function band(){
        var queryUrlTwo = "https://rest.bandsintown.com/artists/" + secondCommand + "/events?app_id=codingbootcamp";

        axios.get(queryUrlTwo).then(
            function(response) {
              console.log("Venue: " + response.data[0].venue.name + "\nVenue Location: " + response.data[0].venue.city + "\nDate: " + response.data[0].datetime);
            })
            .catch(function(error) {
              console.log(error.config);
            });
          }
    


 
