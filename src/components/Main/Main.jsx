import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Card from "../Card/Card";

const Main = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://6954cf161cd5294d2c7d8aad.mockapi.io/api/v1/movies"
        );

        if (!response.ok) {
          throw new Error("'Failed to load movies");
        }

        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className={styles.main_page}>Loading Movies...</div>;
  }

  if (error) {
    return <div className={styles.main_page}>Error: {error}</div>;
  }

  return (
    <div className={styles.main_page}>
      <div className={styles.result_info}>
        Showing {filteredMovies.length} of {movies.length} movies
      </div>

      {filteredMovies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <Card movies={filteredMovies} />
      )}
    </div>
  );
};

export default Main;
