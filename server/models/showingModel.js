const db = require('../db/database');

function getShowingsByMovieId(movieId) {
  const stmt = db.prepare(
    'SELECT * FROM showings WHERE movie_id = ? ORDER BY start_time'
  );
  return stmt.all(movieId);
}

module.exports = {
  getShowingsByMovieId,
};
