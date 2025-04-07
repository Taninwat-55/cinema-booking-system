const db = require('../db/database');
const seatModel = require('../models/seatModel');

// In seatModel.js
function getAvailableSeatsForScreening(screeningId) {
  console.log(`seatModel: Getting seats for screening ID: ${screeningId}`);
  
  try {
    // Get theater information for the screening
    const screening = db.prepare('SELECT theater_id FROM screenings WHERE screening_id = ?').get(screeningId);

    if (!screening) {
      console.error(`No screening found with ID: ${screeningId}`);
      throw new Error('Screening not found');
    }

    console.log(`Found theater ID: ${screening.theater_id} for screening ID: ${screeningId}`);

    // Execute the query with careful error handling
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
    console.log(`Retrieved ${allSeats.length} seats from database`);
    
    return allSeats;
  } catch (err) {
    console.error('Error in getAvailableSeatsForScreening:', err);
    throw err; // Re-throw to be caught by the controller
  }
}

module.exports = {
  getAvailableSeatsForScreening,
};
