import React from "react";
import PropTypes from "prop-types";
import { Route, Link } from "react-router-dom";
import { genres, playlists } from "./playlists";

const Page = ({ classes, match }) => {
  const genre = match.params.genre;
  const filteredPlalists = genre
    ? playlists.filter(pl => pl.genre === genre)
    : playlists;
  return (
    <div>
      <h1>Your playlists</h1>
      <ul>
        {filteredPlalists.map(pl => (
          <li key={pl.id} button>
            <Link to={`/playlists/${pl.id}`}>{pl.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Page.propTypes = {
  match: PropTypes.object.isRequired
};

const StyledList = Page;

const subNavLink = {
  paddingRight: "2rem",
  textDecoration: "none",
  color: "black",
  fontSize: "1.5rem"
};

const ListPage = () => (
  <div>
    <nav>
      {genres.map(g => (
        <Link style={subNavLink} key={g} to={`/playlists/${g}`}>
          {g}
        </Link>
      ))}
    </nav>
    <Route path="/playlists/:genre?" component={StyledList} />
  </div>
);

export default ListPage;
