const screeningModel = require('../models/screeningModel');

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
    const seats = screeningModel.getAvailableSeats(screeningId);
    res.json(seats);
  } catch (err) {
    console.error('❌ Fel vid hämtning av platser:', err.message);
    res.status(500).json({ error: 'Kunde inte hämta platser' });
  }
}

module.exports = {
  getScreeningsForMovie,
  getAllScreenings,
  getAvailableSeatsForScreening,
  getScreeningById
};
