// screeningModel.js
const db = require('../db/database');

function getAllScreenings() {
  return db.prepare(`
    SELECT 
      s.screening_id, 
      s.movie_id, 
      s.theater_id, 
      s.screening_time,
      s.price_adult, 
      s.price_child, 
      s.price_senior,
      t.name AS theater_name,
      m.title AS movie_title
    FROM 
      screenings s
    JOIN 
      theaters t ON s.theater_id = t.theater_id
    JOIN 
      movies m ON s.movie_id = m.movie_id
    ORDER BY 
      s.screening_time
  `).all();
}

function getScreeningById(screeningId) {
  return db.prepare(`
    SELECT 
      s.screening_id, 
      s.movie_id, 
      s.theater_id, 
      s.screening_time,
      s.price_adult, 
      s.price_child, 
      s.price_senior,
      t.name AS theater_name,
      m.title AS movie_title
    FROM 
      screenings s
    JOIN 
      theaters t ON s.theater_id = t.theater_id
    JOIN 
      movies m ON s.movie_id = m.movie_id
    WHERE 
      s.screening_id = ?
  `).get(screeningId);
}

function getScreeningsByMovieId(movieId) {
  return db.prepare(`
    SELECT 
      s.screening_id, 
      s.movie_id, 
      s.theater_id, 
      s.screening_time, 
      s.price_adult, 
      s.price_child, 
      s.price_senior,
      t.name AS theater_name
    FROM 
      screenings s
    JOIN 
      theaters t ON s.theater_id = t.theater_id
    WHERE 
      s.movie_id = ?
    ORDER BY 
      s.screening_time
  `).all(movieId);
}

function getAvailableSeats(screeningId) {
  // Först hämtar vi information om vilken salong visningen är i
  const screening = db.prepare(`
    SELECT theater_id FROM screenings WHERE screening_id = ?
  `).get(screeningId);
  
  if (!screening) {
    throw new Error('Visning finns inte');
  }
  
  // Hämta alla platser i den salongen
  const seats = db.prepare(`
    SELECT 
      s.seat_id,
      s.row_number,
      s.seat_number,
      s.is_available,
      CASE WHEN bs.booked_seat_id IS NULL THEN 1 ELSE 0 END as available_for_booking
    FROM 
      seats s
    LEFT JOIN 
      booked_seats bs ON s.seat_id = bs.seat_id
    LEFT JOIN 
      bookings b ON bs.booking_id = b.booking_id AND b.screening_id = ?
    WHERE 
      s.theater_id = ?
    ORDER BY 
      s.row_number, s.seat_number
  `).all(screeningId, screening.theater_id);
  
  // Filtrera bort redan bokade platser
  return seats.filter(seat => seat.available_for_booking === 1 && seat.is_available === 1);
}

module.exports = {
  getAllScreenings,
  getScreeningById, // Lägg till denna export
  getScreeningsByMovieId,
  getAvailableSeats
};