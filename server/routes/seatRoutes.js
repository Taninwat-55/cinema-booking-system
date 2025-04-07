// seatRoutes.js
const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');

// Make sure the handler function exists in your controller
// router.get('/screenings/:id/seats', seatController.getAvailableSeats);
router.get('/:id', seatController.getAvailableSeats);

module.exports = router;