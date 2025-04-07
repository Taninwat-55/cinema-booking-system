const screeningModel = require('../models/screeningModel');
const seatModel = require('../models/seatModel');

function getAllScreenings(req, res) {
  try {
    const screenings = screeningModel.getAllScreenings();
    res.json(screenings);
  } catch (error) {
    console.error('Fel vid hämtning av visningar:', error.message);
    res.status(500).json({ error: 'Kunde inte hämta visningar' });
  }
}

function getScreeningById(req, res) {
  const screeningId = req.params.id;

  try {
    const screening = screeningModel.getScreeningById(screeningId);
    if (screening) {
      res.json(screening);
    } else {
      res.status(404).json({ error: 'Visning hittades inte' });
    }
  } catch (err) {
    console.error('❌ Fel vid hämtning av visning:', err.message);
    res.status(500).json({ error: 'Kunde inte hämta visning' });
  }
}

function getScreeningsForMovie(req, res) {
  const movieId = req.params.id;

  try {
    const screenings = screeningModel.getScreeningsByMovieId(movieId);
    res.json(screenings);
  } catch (err) {
    console.error('❌ Fel vid hämtning av visningar:', err.message);
    res.status(500).json({ error: 'Kunde inte hämta visningar' });
  }
}

function getAvailableSeatsForScreening(req, res) {
  const screeningId = req.params.id;

  try {
    console.log(`Getting seats for screening ID: ${screeningId}`);

    // Try to get the seats
    let allSeats;
    try {
      allSeats = seatModel.getAvailableSeatsForScreening(screeningId);
      console.log(
        `Retrieved ${allSeats ? allSeats.length : 0} seats from database`
      );
    } catch (seatErr) {
      console.error(
        'Error in seatModel.getAvailableSeatsForScreening:',
        seatErr
      );
      return res.status(500).json({
        error: 'Database error when getting seats',
        details: seatErr.message,
      });
    }

    // Return the seats data
    res.json(allSeats);
  } catch (err) {
    console.error('❌ Fel vid hämtning av platser:', err);
    res.status(500).json({
      error: 'Kunde inte hämta platser',
      details: err.message || 'Unknown error',
    });
  }

  // Inside getAvailableSeatsForScreening function
  console.log(
    'First few seats:',
    JSON.stringify(allSeats.slice(0, 3), null, 2)
  );
}

module.exports = {
  getScreeningsForMovie,
  getAllScreenings,
  getAvailableSeatsForScreening,
  getScreeningById,
};
