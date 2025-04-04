import { Link } from "react-router-dom";
import Icons from "/components/Icons"

export default function SignInPage() {
  return (
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h1>Sign In</h1>
        <div className="sign-in-inputs">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="sign-in">Sign In</button>
        <h2>Other</h2>

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

        <div className="SVG-container">
          <Icons />
        </div>
      </div>

      <div className="welcome-sign-in">
        <h1>Welcome Back!</h1>
        <h2>Sign in to continue</h2>
        <button className="sign-in-button">
          <Link to="/sign-up" className="sign-in">
            Don't have an account? Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
}
