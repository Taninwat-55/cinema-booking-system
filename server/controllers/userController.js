const userModel = require('../models/userModel');

// Hämta användarens profil
function getUserProfile(req, res) {
  try {
    const userId = req.userId; // Satt av authMiddleware
    const user = userModel.getUserById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'Användare hittades inte' });
    }
    
    // Filtrera bort känsliga uppgifter
    const { password, ...userProfile } = user;
    
    res.json(userProfile);
  } catch (error) {
    console.error('Fel vid hämtning av profil:', error);
    res.status(500).json({ error: 'Kunde inte hämta användarprofil' });
  }
}

// Hämta användarens kommande bokningar
function getUpcomingBookings(req, res) {
  try {
    const userId = req.userId;
    const bookings = userModel.getUpcomingBookings(userId);
    
    res.json(bookings);
  } catch (error) {
    console.error('Fel vid hämtning av kommande bokningar:', error);
    res.status(500).json({ error: 'Kunde inte hämta kommande bokningar' });
  }
}

// Hämta användarens bokningshistorik
function getBookingHistory(req, res) {
  try {
    const userId = req.userId;
    const bookings = userModel.getBookingHistory(userId);
    
    res.json(bookings);
  } catch (error) {
    console.error('Fel vid hämtning av bokningshistorik:', error);
    res.status(500).json({ error: 'Kunde inte hämta bokningshistorik' });
  }
}

module.exports = {
  getUserProfile,
  getUpcomingBookings,
  getBookingHistory
};