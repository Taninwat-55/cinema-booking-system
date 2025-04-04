const db = require('../db/database');

function getAvailableSeatsForScreening(screeningId) {
  const stmt = db.prepare(`
    SELECT s.seat_id, s.row_number, s.seat_number
    FROM seats s
    JOIN screenings sc ON s.theater_id = sc.theater_id
    WHERE sc.screening_id = ?
    AND s.seat_id NOT IN (
      SELECT bs.seat_id
      FROM booked_seats bs
      JOIN bookings b ON bs.booking_id = b.booking_id
      WHERE b.screening_id = sc.screening_id
    )
    ORDER BY s.row_number, s.seat_number
  `);

  return stmt.all(screeningId);
}

module.exports = {
  getAvailableSeatsForScreening,
};
