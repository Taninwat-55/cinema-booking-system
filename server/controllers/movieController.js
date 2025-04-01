const movieModel = require('../models/movieModel');

function getAllMovies(req, res) {
  try {
    const movies = movieModel.getAllMovies();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something has gone wrong when fetching' });
  }
}

module.exports = {
  getAllMovies,
};
