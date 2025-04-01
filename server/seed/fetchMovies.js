require('dotenv').config();
const db = require('../db/database');

const OMDB_API_KEY = process.env.OMDB_API_KEY;

function saveMovieToDatabase(movie) {
  const stmt = db.prepare(`
        INSERT OR IGNORE INTO movies (title, poster_url, runtime, description, trailer_url, omdb_id) 
        VALUE (?, ?, ?, ?, ?, ?)
    `);

  stmt.run(
    movie.Title,
    movie.Poster,
    movie.Runtime,
    movie.Plot,
    '', // Behöver trailer
    movie.imdbID
  );
}
