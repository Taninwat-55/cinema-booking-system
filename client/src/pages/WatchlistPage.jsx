import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/WatchlistPage.css"; 

export default function WatchlistPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        
        const response = await fetch(""); //det e bara ett exempel 
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();

  
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); 

 
  if (loading) {
    return (
      <div className="watchlist-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="watchlist-page">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="watchlist-page">
      {/* Header Section */}
      <header className="header">
        <div className="menu-icon">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
        <h1>WATCHLIST</h1>
        <div className="user-profile">
          <span className="profile-icon">👤</span>
          <span className="username">JOE76</span>
        </div>
      </header>

      {/* Movie List Section */}
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-details">
                  <span className="rating">IMDb {movie.rating}</span>
                  <span className="year">{movie.year}</span>
                  <span className="duration">{movie.duration}</span>
                </div>
                <p className="genres">{movie.genres.join(", ")}</p>
                <button className="watchlist-btn">❤️ Watchlist</button>
              </div>
            </div>
          ))
        ) : (
          <p>No movies in your watchlist.</p>
        )}
      </div>

      {/* Pagination Dots (Dynamic based on number of movies) */}
      <div className="pagination">
        {movies.length > 0 &&
          movies.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === 0 ? "active" : ""}`}
            ></span>
          ))}
      </div>
    </div>
  );
}