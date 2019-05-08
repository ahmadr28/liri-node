// getting dotenv
require("dotenv").config();

// keys file
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
