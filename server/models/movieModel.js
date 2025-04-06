const db = require('../db/database');

function getAllMovies() {
  const stmt = db.prepare('SELECT * FROM movies');
  return stmt.all();
}

function getMovieById(id) {
  const stmt = db.prepare('SELECT * FROM movies WHERE movie_id = ?');
  return stmt.get(id);
}

function addMovie(movie) {
  const {
    imdb_id,
    title,
    description,
    length_minutes,
    release_year,
    director,
    poster_url,
    trailer_url,
    genre,
  } = movie;

  const stmt = db.prepare(`
    INSERT INTO movies
    (imdb_id, title, description, length_minutes, release_year, director, poster_url, trailer_url, genre) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

  const result = stmt.run(
    imdb_id,
    title,
    description,
    length_minutes,
    release_year,
    director,
    poster_url,
    trailer_url,
    genre
  );

  return { movie_id: result.lastInsertRowid };
}
module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
};
