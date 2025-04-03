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
    const showings = screeningModel.getScreeningsByMovieId(movieId);
    res.json(showings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Cannot retrieve the movie' });
  }
}

module.exports = {
  getScreeningsForMovie,
  getAllScreenings,
};
