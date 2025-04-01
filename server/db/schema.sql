CREATE TABLE IF NOT EXISTS movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  poster_url TEXT,
  runtime TEXT,
  description TEXT,
  trailer_url TEXT,
  omdb_id TEXT UNIQUE
);