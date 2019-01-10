import React from "react";
import { Route, Switch } from "react-router-dom";

import * as Routes from "./routes";
import MainMenu from "./mainMenu";

const App = () => (
  <div>
    <MainMenu />
    <Switch>
      <Route exact path="/" component={Routes.HomePage} />
      <Route
        path="/playlists/:playlistId(pl-[a-z]{0,4})"
        component={Routes.PlaylistPage}
      />
      <Route path="/playlists" component={Routes.PlayListsPage} />
      <Route path="/search-album" component={Routes.SearchAlbumPage} />
      <Route path="/albums/:albumSlug" component={Routes.AlbumPage} />
    </Switch>
  </div>
);
export default App;
