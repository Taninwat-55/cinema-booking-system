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
  const stmt = db.prepare(`
    SELECT 
      s.screening_id,
      s.screening_time,
      s.price_adult,
      s.price_child,
      s.price_senior,
      t.name AS theater_name
    FROM screenings s
    JOIN theaters t ON s.theater_id = t.theater_id
    WHERE s.movie_id = ?
    ORDER BY s.screening_time
  `);
  return stmt.all(movieId);
}

function getAvailableSeats(screeningId) {
  const stmt = db.prepare(`
    SELECT 
      s.seat_id,
      s.row_number,
      s.seat_number,
      CASE 
        WHEN bs.seat_id IS NOT NULL THEN 1 
        ELSE 0 
      END AS is_booked
    FROM seats s
    JOIN screenings sc ON s.theater_id = sc.theater_id
    LEFT JOIN booked_seats bs ON s.seat_id = bs.seat_id AND bs.screening_id = sc.screening_id
    WHERE sc.screening_id = ?
    ORDER BY s.row_number, s.seat_number
  `);

  return stmt.all(screeningId);
}

module.exports = {
  getScreeningsByMovieId,
  getAllScreenings,
  getAvailableSeats
};
