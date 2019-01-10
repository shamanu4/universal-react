import styles from "./mainmenu.scss";
import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => (
  <div>
    <div>
      <div>Share easly your playlists from Spotify !!!</div>
      <nav className={styles.navBar}>
        <Link className={styles.navLink} to="/">
          Home
        </Link>
        <Link className={styles.navLink} to="/playlists">
          Your playlists
        </Link>
        <Link className={styles.navLink} to="/search-album">
          Search an album
        </Link>
      </nav>
    </div>
  </div>
);

export default MainMenu;
