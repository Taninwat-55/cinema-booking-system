const movieModel = require('../models/movieModel');

function getAllMovies(req, res) {
  try {
    const movies = movieModel.getAllMovies();
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Cannot retrieve movie' });
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
    res.status(500).json({ error: 'Caanot retrieve movie' });
  }
}

function addMovie(req, res) {
  try {
    const movieData = req.body;
    const newMovie = movieModel.addMovie(movieData);
    res
      .status(201)
      .json({ message: 'Film tillagd', movie_id: newMovie.movie_id });
  } catch (error) {
    res.status(500).json({ error: 'Kunde inte lägga till film' });
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
};
