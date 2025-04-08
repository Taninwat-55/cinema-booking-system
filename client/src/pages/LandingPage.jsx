import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroMovies from "../components/HeroMovies";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page-contianer">
      <Navbar />
      <HeroMovies />
    </div>
  );
}

/*

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroMovies from "../components/HeroMovies";
import "../styles/LandingPage.css";

export default function LandingPage() {
  // Skapa state för att lagra filmerna
  const [movies, setMovies] = useState([]);

  // Hämta filmer från API:t vid första renderingen
  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Sortera filmerna, t.ex. efter utgivningsår (senaste först)
  const sortedMovies = [...movies].sort(
    (a, b) => b.release_year - a.release_year
  );

  return (
    <div className="landing-page-contianer">
      <Navbar />
      <HeroMovies />
      <h2>Aktuella Filmer</h2>
      <ul>
        {sortedMovies.map((movie) => (
          <li key={movie.movie_id}>
            <Link to={`/movie-detail/${movie.movie_id}`}>
              🎬 {movie.title} ({movie.release_year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


*/
