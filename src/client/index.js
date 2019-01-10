import { render } from "react-dom";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { loadComponents } from "loadable-components";

import App from "../shared/app";

class Main extends Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Router>
        <App {...this.props} />
      </Router>
    );
  }
}

loadComponents()
  .then(() => {
    render(<Main />, document.getElementById("root"));
  })
  .catch(e => {
    console.error(e);
  });
