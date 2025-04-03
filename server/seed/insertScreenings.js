const db = require('../db/database');

// Hämta alla filmer och salonger från databasen
const movies = db.prepare('SELECT movie_id, title FROM movies').all();
const theaters = db.prepare('SELECT theater_id, name FROM theaters').all();

const insertStmt = db.prepare(`
  INSERT INTO screenings (movie_id, theater_id, screening_time, price_adult, price_child, price_senior)
  VALUES (?, ?, ?, ?, ?, ?)
`);

let startDate = new Date();
startDate.setHours(18, 0, 0, 0); // Alla visningar startar kl 18.00

movies.forEach((movie, movieIndex) => {
  theaters.forEach((theater, theaterIndex) => {
    const screeningDate = new Date(startDate);
    screeningDate.setDate(
      screeningDate.getDate() + movieIndex * 2 + theaterIndex
    ); // olika dagar

    const timeString = screeningDate
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    insertStmt.run(
      movie.movie_id,
      theater.theater_id,
      timeString,
      120.0, // vuxen
      90.0, // barn
      100.0 // pensionär
    );

    console.log(
      `✅ Visning tillagd: ${movie.title} i ${theater.name} - ${timeString}`
    );
  });
});
