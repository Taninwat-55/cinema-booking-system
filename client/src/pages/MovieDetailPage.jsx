import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/MovieDetailsPage.css';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showings, setShowings] = useState([]);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(`/api/movies/${id}/showings`)
      .then((res) => res.json())
      .then((data) => setShowings(data));
  }, [id]);

  if (!movie) return <p>Laddar film...</p>;

  return (
    <div className="movie-detail-page">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <h2>Visningar</h2>
      {showings.length > 0 ? (
        <ul>
          {showings.map((showing) => (
            <li key={showing.screening_id}>
              {showing.screening_time} - {showing.theater_name} <br />
              🎟️ Vuxen: {showing.price_adult} kr | Barn: {showing.price_child}{' '}
              kr | Pensionär: {showing.price_senior} kr
            </li>
          ))}
        </ul>
      ) : (
        <p>Inga visningar tillgängliga.</p>
      )}
    </div>
  );
}

export default MovieDetailPage;
