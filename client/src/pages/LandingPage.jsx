import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import SortPrice from "../components/SortPrice";
export default function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortPrice, setSortPrice] = useState("desc");

  const handleSearch = (e) => {
    const serachTerm = e.target.value.toLowerCase();
    setSearchInput(serachTerm);

    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(serachTerm) &&
        movie.genre.toLowerCase().includes(serachTerm) &&
        movie.director.toLowerCase().includes(serachTerm) &&
        movie.description.toLowerCase().includes(serachTerm) &&
        movie.release_year.toString().includes(serachTerm)
    );
    setFilteredMovies(filtered);
  };

  const handleSortChange = (e) => {
    setSortPrice(e.target.value);
  };
    const sortedMovies = filteredMovies.sort((a, b) => {
      const priceA = a.length_minutes || 0;
      const priceB = b.length_minutes || 0;
      return sortPrice === "asc" ? priceA - priceB : priceB - priceA;
    });
  

  return (
    <div>
      <h1>The PawnStorm cinema</h1>
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
      <SortPrice sortPrice={sortPrice} onSortChange={handleSortChange} />
    </div>
  );
}
