require('dotenv').config();
const https = require('https');
const db = require('../db/database');

const OMDB_API_KEY = process.env.OMDB_API_KEY;
console.log('API Key:', OMDB_API_KEY);

// Lista på IMDb-ID:n – du kan byta ut dessa till dina egna
const imdbIds = [
  'tt0111161',
  'tt0068646',
  'tt0468569',
  'tt1375666',
  'tt0109830',
];

// Funktion för att hämta data från OMDb
function fetchMovie(imdbId) {
  const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${OMDB_API_KEY}`;

  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          const json = JSON.parse(data);
          if (json.Response === 'True') {
            resolve(json);
          } else {
            reject(json.Error);
          }
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });
}

// Funktion för att spara film i databasen
function saveMovieToDB(movie) {
  const stmt = db.prepare(`
    INSERT INTO movies 
    (imdb_id, title, description, length_minutes, release_year, director, poster_url, trailer_url, genre) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    movie.imdbID,
    movie.Title,
    movie.Plot,
    parseInt(movie.Runtime) || null,
    parseInt(movie.Year),
    movie.Director,
    movie.Poster,
    `https://www.youtube.com/results?search_query=${encodeURIComponent(
      movie.Title
    )}+trailer`,
    movie.Genre
  );
}

// Kör hela skriptet
async function run() {
  for (const imdbId of imdbIds) {
    try {
      const movie = await fetchMovie(imdbId);
      saveMovieToDB(movie);
      console.log(`✅ Sparade: ${movie.Title}`);
    } catch (error) {
      console.error(`❌ Fel för ${imdbId}:`, error);
    }
  }
}

run();
