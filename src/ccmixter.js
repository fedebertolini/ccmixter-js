const artists = require('./services/artists');
const songs = require('./services/songs');
const tags = require('./services/tags');

// facade
exports.searchArtists = artists.search;
exports.searchSongs = songs.search;
exports.getGenres = tags.getGenres;
exports.getInstrumentations = tags.getInstrumentations;
