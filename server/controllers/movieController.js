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

function getMovieById(req, res) {
  const id = req.params.id;

  try {
    const movie = movieModel.getMovieById(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Film not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server failed' });
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
};
