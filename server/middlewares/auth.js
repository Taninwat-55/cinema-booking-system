function requireAuth(req, res, next) {
    // Enkel version - i verkligheten skulle du använda JWT eller sessions
    const userId = req.headers['user-id'];
    
    if (!userId) {
      return res.status(401).json({ error: 'Åtkomst nekad, logga in för att fortsätta' });
    }
    
    // Lägg till user_id i request-objektet för att använda i routes
    req.userId = parseInt(userId);
    next();
  }
  
  module.exports = {
    requireAuth
  };