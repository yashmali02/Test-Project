import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.main_Nav}>
      <div className={styles.nav_logo}>test website logo</div>

      <div className={styles.nav_search}>
        <input
          type="text"
          placeholder="Enter a movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={styles.nav_right}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>MOVIES</li>
            <li>TV Series</li>
            <li>HOME</li>
          </ul>
        </nav>
        <button className={styles.nav_login} type="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
