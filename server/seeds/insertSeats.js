const db = require('../db/database');

// Hämta alla salonger
const theaters = db.prepare('SELECT * FROM theaters').all();

// Radera befintliga platser (om det finns några)
db.prepare('DELETE FROM seats').run();

// Förbered insättningssats
const insertSeat = db.prepare(`
  INSERT INTO seats (theater_id, row_number, seat_number, is_available)
  VALUES (?, ?, ?, 1)
`);

theaters.forEach((theater) => {
  console.log(`Genererar platser för ${theater.name}...`);

  // Generera alla platser för denna salong
  for (let row = 1; row <= theater.seats_rows; row++) {
    for (let seat = 1; seat <= theater.seats_columns; seat++) {
      insertSeat.run(theater.theater_id, row, seat);
      console.log(`Skapad plats: Rad ${row}, Stol ${seat} i ${theater.name}`);
    }
  }
});

console.log('✅ Platser har genererats för alla salonger');
