import React from "react";
import "../styles/Navbar.css";
import { FaArrowLeft } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <section className="navbar-section-container">
      <div className="return-icon-container">
        <FaArrowLeft className="return-icon" />
      </div>

      <div className="navbar-links-container">
        <div className="links-container">
          <a>About</a>
        </div>
        <div className="links-container">
          <a>Trailers</a>
        </div>
        <div className="links-container">
          <a>Featured</a>
        </div>
        <div className="links-container">
          <a>Watch List</a>
        </div>
      </div>

      <div className="profile-account-container">
        <div className="profile-account-wrapper">
          <div className="profile-account-icon-container">
            <CgProfile className="profile-account-icon" />
          </div>

          <div className="account-name-container">
            <h1>JOE76</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
