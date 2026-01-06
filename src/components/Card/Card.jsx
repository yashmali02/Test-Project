import React from "react";
import styles from "./Card.module.css";

const Card = ({ movies }) => {
  console.log(movies[0]);
  return (
    <>
      {movies.map((movie, idx) => (
        <div key={idx} className={styles.main_card}>
          <h2>{movie?.title}</h2>
          <img src={movie?.poster} />
          <div className={styles.year_rating}>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <p>{movie.rating}</p>
          </div>
          <button className={styles.watch_btn}>Watch Now</button>
        </div>
      ))}
    </>
  );
};

export default Card;
