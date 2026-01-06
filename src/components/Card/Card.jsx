import React from "react";
import styles from "./Card.module.css";

const Card = ({ movies }) => {
  return (
    <>
      {movies.map((movie, idx) => (
        <div key={idx} className={styles.main_card}>
          <h2>{movie?.title}</h2>
          {movie?.poster ? (
            <img src={movie?.poster} />
          ) : (
            "No Poster available for this movie"
          )}
          <div className={styles.year_rating_container}>
            <div className={styles.year_rating}>
              <p>{movie.year}</p>
              <p>{movie.genre}</p>
              <p>{movie.rating}</p>
            </div>
            <button className={styles.watch_btn}>Watch Now</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
