require('dotenv').config();
const db = require('../db/database');
const fetch = require('node-fetch')

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

async function getMovieFromOMDb(title) {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=afbae1c2`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === 'True') {
    console.log(`Add to: ${data.Title}`)
  }
}
