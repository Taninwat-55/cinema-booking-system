import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
export default function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [priceOrder, setPriceOrder] = useState("desc");

  const handleSearch = (e) => {
    const serachTerm = e.target.value.toLowerCase();
    setSearchInput(serachTerm);

    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(serachTerm) &&
        movie.genre.toLowerCase().includes(serachTerm) &&
        movie.director.toLowerCase().includes(serachTerm) &&
        movie.description.toLowerCase().includes(serachTerm) &&
        movie.release_year.toLowerCase().includes(serachTerm)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <Link className="sign-in-btn" to="/sign-in">
        Sign In
      </Link>

      <Link className="sign-up-btn" to="/sign-up">
        Sign Up
      </Link>

      <Link className="sign-up-btn" to="/movie-detail">
        Movie Detail
      </Link>

      <Link className="sign-up-btn" to="/watchlist">
        Watchlist
      </Link>

      <Link className="sign-up-btn" to="/booking">
        Booking
      </Link>

      <Searchbar searchInput={searchInput} handleSearch={handleSearch} />
    </div>
  );
}
