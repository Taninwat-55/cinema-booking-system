const authModel = require('../models/authModel');
const crypto = require('crypto');

// Registrera en ny användare
function register(req, res) {
  try {
    const { email, password, name } = req.body;
    
    // Validera indata
    if (!email || !password) {
      return res.status(400).json({ error: 'E-post och lösenord krävs' });
    }
    
    // Kolla om användaren redan finns
    const existingUser = authModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'E-postadressen används redan' });
    }
    
    // Hasha lösenordet
    const hashedPassword = hashPassword(password);
    
    // Skapa användaren
    const userId = authModel.createUser(email, hashedPassword, name);
    
    res.status(201).json({
      message: 'Användare skapad',
      userId
    });
  } catch (error) {
    console.error('Fel vid registrering:', error);
    res.status(500).json({ error: 'Kunde inte skapa användaren' });
  }
}

// Logga in en användare
function login(req, res) {
  try {
    const { email, password } = req.body;
    
    // Validera indata
    if (!email || !password) {
      return res.status(400).json({ error: 'E-post och lösenord krävs' });
    }
    
    // Hämta användaren
    const user = authModel.getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Ogiltiga inloggningsuppgifter' });
    }
    
    // Verifiera lösenordet
    const hashedInputPassword = hashPassword(password);
    if (user.password !== hashedInputPassword) {
      return res.status(401).json({ error: 'Ogiltiga inloggningsuppgifter' });
    }
    
    // Skapa en session eller token (för en enkel lösning använder vi bara userId)
    res.json({
      message: 'Inloggning lyckades',
      user: {
        user_id: user.user_id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Fel vid inloggning:', error);
    res.status(500).json({ error: 'Kunde inte logga in' });
  }
}

// Hjälpfunktion för att hasha lösenord
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

module.exports = {
  register,
  login
};