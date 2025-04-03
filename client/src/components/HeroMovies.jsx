import React from "react";
import "../styles/HeroMovies.css";
import BatmanImage from "../img/batman-img.png";
import { CiHeart } from "react-icons/ci";

const HeroMovies = () => {
  return (
    <main className="hero-movies-section-container">
      <div className="movies-container">
        <div className="movies-wrapper">
          <div className="movie-card-container">
            <div className="movie-card">
              <div className="movie-card-image-container">
                <img src={BatmanImage}></img>
              </div>
              <div className="movie-name-container">
                <div className="movie-name-wrapper">
                  <h2>Batman</h2>
                </div>
              </div>
              <div className="movie-rating-container">
                <div className="movie-rating-wrapper">
                  <div className="imdb-box-container">
                    <div className="imdb-box">
                      <h3>imdb</h3>
                    </div>
                  </div>
                  <div className="rating-number-container">
                    <p>7.8</p>
                  </div>
                </div>
              </div>

              <div className="movie-information-container">
                <div className="movie-information-wrapper">
                  <p>
                    2022 | 2h 58min | <br></br>
                    Action,Superhero
                  </p>
                </div>
              </div>

              <div className="add-to-list-container">
                <div className="add-to-list-wrapper">
                  <div className="add-to-list">
                    <div className="heart-icon-container">
                      <CiHeart className="heart-icon" />
                    </div>
                    <div className="watch-list-container">
                      <h3>Watchlist</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card-container">
            <div className="movie-card">
              <div className="movie-card-image-container">
                <img src={BatmanImage}></img>
              </div>
              <div className="movie-name-container">
                <div className="movie-name-wrapper">
                  <h2>Batman</h2>
                </div>
              </div>
              <div className="movie-rating-container">
                <div className="movie-rating-wrapper">
                  <div className="imdb-box-container">
                    <div className="imdb-box">
                      <h3>imdb</h3>
                    </div>
                  </div>
                  <div className="rating-number-container">
                    <p>7.8</p>
                  </div>
                </div>
              </div>

              <div className="movie-information-container">
                <div className="movie-information-wrapper">
                  <p>
                    2022 | 2h 58min | <br></br>
                    Action,Superhero
                  </p>
                </div>
              </div>

              <div className="add-to-list-container">
                <div className="add-to-list-wrapper">
                  <div className="add-to-list">
                    <div className="heart-icon-container">
                      <CiHeart className="heart-icon" />
                    </div>
                    <div className="watch-list-container">
                      <h3>Watchlist</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card-container">
            <div className="movie-card">
              <div className="movie-card-image-container">
                <img src={BatmanImage}></img>
              </div>
              <div className="movie-name-container">
                <div className="movie-name-wrapper">
                  <h2>Batman</h2>
                </div>
              </div>
              <div className="movie-rating-container">
                <div className="movie-rating-wrapper">
                  <div className="imdb-box-container">
                    <div className="imdb-box">
                      <h3>imdb</h3>
                    </div>
                  </div>
                  <div className="rating-number-container">
                    <p>7.8</p>
                  </div>
                </div>
              </div>

              <div className="movie-information-container">
                <div className="movie-information-wrapper">
                  <p>
                    2022 | 2h 58min | <br></br>
                    Action,Superhero
                  </p>
                </div>
              </div>

              <div className="add-to-list-container">
                <div className="add-to-list-wrapper">
                  <div className="add-to-list">
                    <div className="heart-icon-container">
                      <CiHeart className="heart-icon" />
                    </div>
                    <div className="watch-list-container">
                      <h3>Watchlist</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dots-menu-container">
        <div className="dots-wrapper">
          <div className="dot-container">
            <div className="dot"></div>
          </div>
          <div className="dot-container">
            <div className="dot"></div>
          </div>

          <div className="dot-container">
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroMovies;
