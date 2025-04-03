import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";
import HeroMovies from "../components/HeroMovies";

export default function LandingPage() {
  return (
    <div className="landing-page-contianer">
      <Navbar />
      <HeroMovies />
    </div>
  );
}

/*


 
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

 */
