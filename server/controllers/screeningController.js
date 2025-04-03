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

module.exports = {
  getScreeningsForMovie,
  getAllScreenings,
};
