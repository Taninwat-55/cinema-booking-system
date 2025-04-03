import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/MovieDetailsPage.css";

export default function MovieDetailPage() {
  useEffect(() => {
    // Add a class to the body when this page is mounted
    document.body.classList.add("movie-detail-bg");

    // Remove the class when navigating away
    return () => {
      document.body.classList.remove("movie-detail-bg");
    };
  }, []); 
  return (
    <div className="movie-detail-page">
      <div className="Home-btn">
        <Link to="/" className="home-link">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" />
          </svg>
        </Link>
      </div>
      <h1 className="movie-detail-title">Movie Detail</h1>
    </div>
  );
}
