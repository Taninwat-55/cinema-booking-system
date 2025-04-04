const db = require('../db/database');
const crypto = require('crypto');

function createBooking(bookingData) {
  // Generera ett unikt bokningsnummer
  const bookingNumber = generateBookingNumber();
  
  // Starta en transaktion för att säkerställa att allt sparas eller inget
  const transaction = db.transaction(() => {
    // 1. Skapa bokningen
    const bookingResult = db.prepare(`
      INSERT INTO bookings (booking_number, user_id, screening_id, total_price)
      VALUES (?, ?, ?, ?)
    `).run(bookingNumber, bookingData.user_id || null, bookingData.screening_id, bookingData.total_price);
    
    const bookingId = bookingResult.lastInsertRowid;
    
    // 2. Spara bokningsdetaljer (antal biljetter)
    if (bookingData.tickets.adult > 0) {
      db.prepare(`
        INSERT INTO booking_details (booking_id, ticket_type, quantity, price_per_ticket)
        VALUES (?, ?, ?, ?)
      `).run(bookingId, 'adult', bookingData.tickets.adult, getTicketPrice(bookingData.screening_id, 'adult'));
    }
    
    if (bookingData.tickets.child > 0) {
      db.prepare(`
        INSERT INTO booking_details (booking_id, ticket_type, quantity, price_per_ticket)
        VALUES (?, ?, ?, ?)
      `).run(bookingId, 'child', bookingData.tickets.child, getTicketPrice(bookingData.screening_id, 'child'));
    }
    
    if (bookingData.tickets.senior > 0) {
      db.prepare(`
        INSERT INTO booking_details (booking_id, ticket_type, quantity, price_per_ticket)
        VALUES (?, ?, ?, ?)
      `).run(bookingId, 'senior', bookingData.tickets.senior, getTicketPrice(bookingData.screening_id, 'senior'));
    }
    
    // 3. Spara bokade platser
    for (const seatId of bookingData.seats) {
      db.prepare(`
        INSERT INTO booked_seats (booking_id, seat_id)
        VALUES (?, ?)
      `).run(bookingId, seatId);
    }
    
    return {
      booking_id: bookingId,
      booking_number: bookingNumber
    };
  });
  
  return transaction();
}

// Hjälpfunktion för att hämta biljettpris
function getTicketPrice(screeningId, ticketType) {
  const priceField = `price_${ticketType}`;
  const screening = db.prepare(`
    SELECT ${priceField} FROM screenings WHERE screening_id = ?
  `).get(screeningId);
  
  return screening[priceField];
}

// Hjälpfunktion för att generera bokningsnummer
function generateBookingNumber() {
  return 'BK-' + crypto.randomBytes(4).toString('hex').toUpperCase();
}

// Hämta bokning via bokningsnummer
function getBookingByNumber(bookingNumber) {
  const booking = db.prepare(`
    SELECT * FROM bookings WHERE booking_number = ?
  `).get(bookingNumber);
  
  if (!booking) return null;
  
  const details = db.prepare(`
    SELECT * FROM booking_details WHERE booking_id = ?
  `).all(booking.booking_id);
  
  const seats = db.prepare(`
    SELECT bs.*, s.row_number, s.seat_number 
    FROM booked_seats bs
    JOIN seats s ON bs.seat_id = s.seat_id
    WHERE bs.booking_id = ?
  `).all(booking.booking_id);
  
  return {
    ...booking,
    details,
    seats
  };
}

module.exports = {
  createBooking,
  getBookingByNumber
};