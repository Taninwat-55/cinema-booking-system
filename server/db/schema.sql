CREATE TABLE IF NOT EXISTS movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  poster_url TEXT,
  runtime TEXT,
  description TEXT,
  trailer_url TEXT,
  omdb_id TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS showings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  movie_id INTEGER NOT NULL,
  salon TEXT NOT NULL,
  start_time TEXT NOT NULL,
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);