const db = require('../db/database');

function getUserById(userId) {
  return db.prepare('SELECT * FROM users WHERE user_id = ?').get(userId);
}

function getUpcomingBookings(userId) {
  const currentDate = new Date().toISOString().replace('T', ' ').substring(0, 19);
  
  return db.prepare(`
    SELECT 
      b.booking_id,
      b.booking_number,
      b.total_price,
      b.booking_time,
      s.screening_time,
      s.theater_id,
      t.name AS theater_name,
      m.movie_id,
      m.title AS movie_title,
      m.poster_url,
      (
        SELECT COUNT(*) FROM booked_seats bs WHERE bs.booking_id = b.booking_id
      ) AS seat_count
    FROM 
      bookings b
    JOIN 
      screenings s ON b.screening_id = s.screening_id
    JOIN 
      theaters t ON s.theater_id = t.theater_id
    JOIN 
      movies m ON s.movie_id = m.movie_id
    WHERE 
      b.user_id = ? AND s.screening_time > ?
    ORDER BY 
      s.screening_time ASC
  `).all(userId, currentDate);
}

function getBookingHistory(userId) {
  const currentDate = new Date().toISOString().replace('T', ' ').substring(0, 19);
  
  return db.prepare(`
    SELECT 
      b.booking_id,
      b.booking_number,
      b.total_price,
      b.booking_time,
      s.screening_time,
      s.theater_id,
      t.name AS theater_name,
      m.movie_id,
      m.title AS movie_title,
      m.poster_url,
      (
        SELECT COUNT(*) FROM booked_seats bs WHERE bs.booking_id = b.booking_id
      ) AS seat_count
    FROM 
      bookings b
    JOIN 
      screenings s ON b.screening_id = s.screening_id
    JOIN 
      theaters t ON s.theater_id = t.theater_id
    JOIN 
      movies m ON s.movie_id = m.movie_id
    WHERE 
      b.user_id = ? AND s.screening_time <= ?
    ORDER BY 
      s.screening_time DESC
  `).all(userId, currentDate);
}

module.exports = {
  getUserById,
  getUpcomingBookings,
  getBookingHistory
};