const db = require('../db/database');

function getAllMovies() {
  const stmt = db.prepare('SELECT * FROM movies');
  return stmt.all();
}

module.exports = {
  getAllMovies,
};
