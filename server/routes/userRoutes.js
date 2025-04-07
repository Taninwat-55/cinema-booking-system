const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requireAuth } = require('../middlewares/auth');

// Alla routes här kräver autentisering
router.use(requireAuth);

router.get('/profile', userController.getUserProfile);
router.get('/bookings/upcoming', userController.getUpcomingBookings);
router.get('/bookings/history', userController.getBookingHistory);

module.exports = router;
