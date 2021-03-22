import React from "react";
import { Router, Link } from "@reach/router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useTranslation } from "react-i18next";

const App = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    void i18n.changeLanguage("fr");
  };
  return (
    <main>
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="profile">Profile</Link>
        <button onClick={changeLanguage}>Change language</button>
      </nav>
      <Router>
        <Home path="/" />
        <Profile path="profile" />
      </Router>
    </main>
  );
};

export default App;
