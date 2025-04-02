import React, { useEffect, useState } from "react";

const OMDBTest = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=guardians`
        );
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movies");
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>OMDB Movie Test</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ border: "1px solid gray", padding: "1rem", width: "200px" }}>
            <img src={movie.Poster} alt={movie.Title} style={{ width: "100%" }} />
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OMDBTest;