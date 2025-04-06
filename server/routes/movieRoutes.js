const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const screeningController = require('../controllers/screeningController');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.get('/:id/showings', screeningController.getScreeningsForMovie);
router.post('/', movieController.addMovie);

module.exports = router;
