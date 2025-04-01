const showingModel = require('../models/showingModel');

function getShowingsForMovie(req, res) {
  const movieId = req.params.id;

  try {
    const showings = showingModel.getShowingsByMovieId(movieId);
    res.json(showings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Cannot retrieve the movie' });
  }
}

module.exports = {
  getShowingsForMovie,
};
