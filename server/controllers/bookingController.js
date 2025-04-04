const bookingModel = require('../models/bookingModel');

function createBooking(req, res) {
  try {
    const bookingData = req.body;
    
    // Validera att nödvändig data finns
    if (!bookingData.screening_id || !bookingData.tickets || !bookingData.seats || !bookingData.total_price) {
      return res.status(400).json({ error: 'Ofullständig bokningsdata' });
    }
    
    // Validera att antalet platser matchar antalet biljetter
    const totalTickets = bookingData.tickets.adult + bookingData.tickets.child + bookingData.tickets.senior;
    if (totalTickets !== bookingData.seats.length) {
      return res.status(400).json({ error: 'Antalet platser matchar inte antalet biljetter' });
    }
    
    // Skapa bokningen
    const result = bookingModel.createBooking(bookingData);
    
    res.status(201).json({
      message: 'Bokning skapad',
      booking_id: result.booking_id,
      booking_number: result.booking_number
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Kunde inte skapa bokning' });
  }
}

function getBookingByNumber(req, res) {
  try {
    const { booking_number } = req.params;
    const booking = bookingModel.getBookingByNumber(booking_number);
    
    if (!booking) {
      return res.status(404).json({ error: 'Bokning hittades inte' });
    }
    
    res.json(booking);
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ error: 'Kunde inte hämta bokning' });
  }
}

module.exports = {
  createBooking,
  getBookingByNumber
};