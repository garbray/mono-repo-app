import React from "react";
import { Link } from "@reach/router";
import { Provider } from "react-redux";

import { store } from "./redux/store";
type Props = {
  children?: JSX.Element | JSX.Element[];
};

const App: React.FC<Props> = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <main>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="profile">Profile</Link>
        </nav>
        {children}
      </main>
    </Provider>
  );
};

export default App;
