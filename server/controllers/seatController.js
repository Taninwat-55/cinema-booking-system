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

module.exports = {
  getAvailableSeats,
};