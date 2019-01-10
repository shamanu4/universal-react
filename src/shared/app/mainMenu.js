import React from "react";
import { Link } from "react-router-dom";

const navBar = {
  backgroundColor: "#c0c0c0",
  display: "block",
  position: "absolute",
  right: "1rem"
};

const navLink = {
  margin: "1rem",
  paddingRight: "2rem",
  textDecoration: "none",
  color: "white",
  fontSize: "2rem"
};

const MainMenu = () => (
  <div>
    <div>
      <div>Share easly your playlists from Spotify !!!</div>
      <nav style={navBar}>
        <Link style={navLink} to="/">
          Home
        </Link>
        <Link style={navLink} to="/playlists">
          Your playlists
        </Link>
        <Link style={navLink} to="/search-album">
          Search an album
        </Link>
      </nav>
    </div>
  </div>
);

export default MainMenu;
