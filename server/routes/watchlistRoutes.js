const router = require('./movieRoutes');

router.get('/api/watchlist', (req, res) => {
  const watchlist = db.prepare('SELECT * FROM movies').all();
  res.json(watchlist);
});

module.exports = router;
