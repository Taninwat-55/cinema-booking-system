const db = require('../db/database');
const seatModel = require('./seatModel'); // Add this import

// Preserve all existing functions
function getAllScreenings() {
  return db
    .prepare(
      `
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
  `
    )
    .all();
}

function getScreeningById(screeningId) {
  return db
    .prepare(
      `
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
  `
    )
    .get(screeningId);
}

function getScreeningsByMovieId(movieId) {
  return db
    .prepare(
      `
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
  `
    )
    .all(movieId);
}

function getAvailableSeats(screeningId) {
  // Simply delegate to the seatModel implementation
  return seatModel.getAvailableSeatsForScreening(screeningId);
}

module.exports = {
  getAllScreenings,
  getScreeningById,
  getScreeningsByMovieId,
  getAvailableSeats,
};