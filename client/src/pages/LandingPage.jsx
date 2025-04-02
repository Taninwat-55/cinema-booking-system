import { Link } from "react-router-dom";
export default function LandingPage() {
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

    </div>
  );
}
