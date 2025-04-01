const db = require('../db/database');

function getAllMovies() {
  const stmt = db.prepare('SELECT * FROM movies');
  return stmt.all();
}

function getMovieById(id) {
  const stmt = db.prepare('SELECT * FROM movies WHERE id is ?');
  return stmt.get(id);
}

module.exports = {
  getAllMovies,
  getMovieById,
};
