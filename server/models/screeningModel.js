const db = require('../db/database');

function getAllScreenings() {
  const stmt = db.prepare(`
    SELECT 
      s.screening_id,
      s.screening_time,
      s.price_adult,
      s.price_child,
      s.price_senior,
      m.title AS movie_title,
      t.name AS theater_name
    FROM screenings s
    JOIN movies m ON s.movie_id = m.movie_id
    JOIN theaters t ON s.theater_id = t.theater_id
    ORDER BY s.screening_time ASC
  `);
  return stmt.all();
}

function getScreeningsByMovieId(movieId) {
  const stmt = db.prepare(
    'SELECT * FROM showings WHERE movie_id = ? ORDER BY start_time'
  );
  return stmt.all(movieId);
}

module.exports = {
  getScreeningsByMovieId,
  getAllScreenings,
};
