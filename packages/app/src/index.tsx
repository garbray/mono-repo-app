import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import App from "./App";
import "./i18n";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/browser");
  worker.start();
}

ReactDOM.render(
  <Suspense fallback="null">
    <App>
      <Router>
        <Home path="/" />
        <Profile path="profile" />
        <NotFound default />
      </Router>
    </App>
  </Suspense>,
  document.querySelector("#app")
);
