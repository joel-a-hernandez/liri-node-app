# LIRI Bot

This is a command line app that queries the spotify API, OMDB API and Bands in Town API and neatly returns to users information about their requested film, band, or movie.

# Commands #

The following are the commands that are applicable to this app.

# spotify-this-song

example: node liri.js spotify-this-song "song"

you will be presented with the song name, artist, album, and a preview link for your requested song. Song is an optional argument, but if no song is specified, LIRI will default to All Star –– Smash Mouth. This queries the Spotify node API to return this information to the user. If a song is not found, the user will be notified that it cannot be found.

![](images/spotify-this-song.png)

# concert-this

example: node liri.js concert-this "band"

you will be presented with the upcoming concerts venues, cities, and dates for approaching concerts for a chosen artist. This queries the Bands in Town Events API using Request to return this information to the user. 

![](images/concert-this.png)

# movie-this

example: node liri.js movie-this "movie"

you will be presented with the movie title, year, IMDB and Rotten Tomatoes ratings (given they are returned by the API), country, language, plot, and actors for the selected movie. This queries the OMDB API using Request to return this information to the user. 

![](images/movie-this.png)

# do-what-it-says

example: node liri.js do-what-it-says

LIRI Bot will run spotify-this-song for I Want it That Way. It reads the file random.txt and displays it.

![](images/do-what-it-says.png)

# Built With:
node.js - Javascript runtime environment

Request - For calling Bands in Town & OMDB APIs

Node Spotify API - For spotify-this-song feature

Bands in Town Events API - For concert-this feature

OMDB API - For movie-this feature


# Author
Joel Hernandez
