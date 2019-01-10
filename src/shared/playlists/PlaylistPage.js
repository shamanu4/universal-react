import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlaylistPage = ({ classes, match }) => {
  const playlist = playlists.find(pl => pl.id === match.params.playlistId);
  return (
    <div>
      <h1>{playlist.title}</h1>
      <ul>
        {playlist.albums.map(album => (
          <li key={album.slug} button>
            <Link to={`/albums/${album.slug}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PlaylistPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default PlaylistPage;
