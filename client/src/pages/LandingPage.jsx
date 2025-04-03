/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Searchbar from '../components/Searchbar';
import SortPrice from '../components/SortPrice';

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortPrice, setSortPrice] = useState('desc');

  useEffect(() => {
    fetch('/api/movies')
      .then((res) => {
        if (!res.ok) throw new Error('Nätverksfel eller ogiltigt svar');
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => {
        console.error('❌ Fel vid hämtning av filmer:', error.message);
      });
  }, []);

  const handleSearch = (e) => {
    const serachTerm = e.target.value.toLowerCase();
    setSearchInput(serachTerm);

    const filtered = movies.filter((movie) =>
      [
        movie.title,
        movie.genre,
        movie.director,
        movie.description,
        movie.release_year.toString(),
      ].some((field) => field.toLowerCase().includes(serachTerm))
    );
    // const filtered = movies.filter(
    //   (movie) =>
    //     movie.title.toLowerCase().includes(serachTerm) &&
    //     movie.genre.toLowerCase().includes(serachTerm) &&
    //     movie.director.toLowerCase().includes(serachTerm) &&
    //     movie.description.toLowerCase().includes(serachTerm) &&
    //     movie.release_year.toString().includes(serachTerm)
    // );
    setFilteredMovies(filtered);
  };

  const handleSortChange = (e) => {
    setSortPrice(e.target.value);
  };
  const sortedMovies = [...filteredMovies].sort((a, b) => {
    return sortPrice === 'asc'
      ? a.release_year - b.release_year
      : b.release_year - a.release_year;
  });
  // const sortedMovies = filteredMovies.sort((a, b) => {
  //   const priceA = new Date(a.price);
  //   const priceB = new Date(b.price);
  //   return sortPrice === "asc" ? priceA - priceB : priceB - priceA;
  // });

  return (
    <div>
      <h1>The PawnStorm cinema</h1>

      <div>
        <Link className="sign-in-btn" to="/sign-in">
          Sign In
        </Link>
        <Link className="sign-up-btn" to="/sign-up">
          Sign Up
        </Link>
        {/* <Link className="sign-up-btn" to="/movie-detail">
          Movie Detail
        </Link> */}
        <Link className="sign-up-btn" to="/watchlist">
          Watchlist
        </Link>
        <Link className="sign-up-btn" to="/booking">
          Booking
        </Link>
      </div>

      <Searchbar searchInput={searchInput} handleSearch={handleSearch} />
      <SortPrice sortPrice={sortPrice} onSortChange={handleSortChange} />

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

export default LandingPage;
