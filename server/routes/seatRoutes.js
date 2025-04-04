const express = require('express');
const router = express.Router();
const seatController = require('../controllers/seatController');

router.get('/:id/available', seatController.getAvailableSeats);

module.exports = router;