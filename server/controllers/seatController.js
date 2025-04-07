const db = require('../db/database');

const seatModel = require('../models/seatModel');

function getAvailableSeats(req, res) {
  const screeningId = req.params.id;
  try {
    const seats = seatModel.getAvailableSeatsForScreening(screeningId);
    res.json(seats);
  } catch (err) {
    console.error('❌ Fel vid hämtning av platser:', err.message);
    res.status(500).json({ error: 'Kunde inte hämta platser' });
  }
}

function getAvailableSeatsForScreening(screeningId) {
  console.log(`Getting seats for screening ID: ${screeningId}`);

  // First get theater information for the screening
  const screening = db
    .prepare('SELECT theater_id FROM screenings WHERE screening_id = ?')
    .get(screeningId);

  if (!screening) {
    console.error(`No screening found with ID: ${screeningId}`);
    throw new Error('Screening not found');
  }

  console.log(
    `Found theater ID: ${screening.theater_id} for screening ID: ${screeningId}`
  );

  // Execute the SQL query to get seats
  const stmt = db.prepare(`
    SELECT 
      s.seat_id, 
      s.row_number, 
      s.seat_number,
      s.is_available,
      CASE WHEN bs.booked_seat_id IS NULL THEN 1 ELSE 0 END as available_for_booking
    FROM 
      seats s
    LEFT JOIN (
      SELECT bs.* 
      FROM booked_seats bs
      JOIN bookings b ON bs.booking_id = b.booking_id
      WHERE b.screening_id = ?
    ) bs ON s.seat_id = bs.seat_id
    WHERE 
      s.theater_id = ?
    ORDER BY 
      s.row_number, s.seat_number
  `);

  const allSeats = stmt.all(screeningId, screening.theater_id);

  // Check the database directly for row 1 seats to confirm data
  try {
    const directQuery = db
      .prepare(
        'SELECT * FROM seats WHERE theater_id = ? AND row_number = 1 ORDER BY seat_number'
      )
      .all(screening.theater_id);
    console.log(
      'Directly queried row 1 seats:',
      JSON.stringify(directQuery, null, 2)
    );
  } catch (error) {
    console.error('Error running direct query:', error);
  }

  return allSeats;
}

module.exports = {
  getAvailableSeatsForScreening,
  getAvailableSeats,
};
