/* eslint-disable no-console */
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { getLoadableState } from "loadable-components/server";

import App from "../shared/app";
import render from "./render";

const app = express();
app.use("/assets", express.static("./dist"));

app.get("*", async (req, res) => {
  const context = {};

  const appWithRouter = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const loadableState = await getLoadableState(appWithRouter);
  const html = ReactDOMServer.renderToString(appWithRouter);
  const css = "";

  res.status(200).send(render(html, css, loadableState));
});

app.listen(3000, () => console.log("Demo app listening on port 3000"));
