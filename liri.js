// LIRI BOT APP

// getting dotenv
require("dotenv").config();

// keys file
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var moment = require("moment");
var axios = require("axios");

// requesting the spotify
var songSearch = process.argv[3];
var bandSearch = process.argv.slice(3).join(" ");
function song(song) {
    spotify.search({ type: "track", query: songSearch }, function(err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }
        console.log(`Artist: ${data.tracks.items[0].artists[0].name}`);
        console.log(`Song Name: ${data.tracks.items[0].name}`);
        console.log(`URL: ${data.tracks.items[0].external_urls.spotify}`);
        console.log(`Album: ${data.tracks.items[0].album.name}`);
    });
}
if (process.argv[2] === "spotify-this-song") {
    process.ar;
    song();
}

// omdb request
function movie(movieSelection) {
    var movieSearch = process.argv.splice(3).join(" ");

    if (process.argv[2] === "movie-this") {
        axios.get(`http://www.omdbapi.com/?t=${movieSearch}&y=&plot=short&apikey=trilogy`).then(function(response) {
            // console.log(response.data);
            console.log(`The movie's title: ${response.data.Title}`);
            console.log(`The year this movie came out: ${response.data.Year}`);
            console.log(`The IMDB rating is: ${response.data.imdbRating}`);
            console.log(`The Rotten Tomatoes rating is: ${response.data.Ratings[1].Value}`);
            console.log(`The country this movie was produced is: ${response.data.Country}`);
            console.log(`The language of this movie: ${response.data.Language}`);
            console.log(`Plot of the movie: ${response.data.Plot}`);
            console.log(`Actors: ${response.data.Actors}`);
        });
    }
}
movie();
// requesting the bands
function bands() {
    if (process.argv[2] === "concert-this") {
        axios
            .get(`https://rest.bandsintown.com/artists/${bandSearch}/events?app_id=codingbootcamp`)
            .then(function(response) {
                // console.log(response.data);
                console.log(`Venue: ${response.data[0].venue.name}`);
                console.log(`City: ${response.data[0].venue.city}`);
                console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
            });
    }
}
bands();
