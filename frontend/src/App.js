import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";

import Content from "./components/Content";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Protected from "./components/Protected";
import Register from "./components/Register";

export const UserContext = React.createContext([]);

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logOutCallback = async () => {};

  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App">
        <Navigation logOutCallback={logOutCallback} />
        <Router id="router">
          <Login path="login" />
          <Register path="register" />
          <Protected path="protected" />
          <Content path="/" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
