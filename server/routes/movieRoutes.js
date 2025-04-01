const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const showingController = require('../controllers/showingController');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.get('/:id/showings', showingController.getShowingsForMovie);

module.exports = router;
