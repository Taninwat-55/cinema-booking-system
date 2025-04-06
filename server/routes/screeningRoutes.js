const express = require('express');
const router = express.Router();
const screeningController = require('../controllers/screeningController');

router.get('/', screeningController.getAllScreenings);
router.get('/:id/seats', screeningController.getAvailableSeatsForScreening);

module.exports = router;
