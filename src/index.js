import React from "react"; // reaches into react library in the node-module
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
// import createBrowserHistory from "history/createBrowserHistory";
import App from "./components/app";
import Jokes from "./components/Jokes";
import MusicMaster from "./projects/music-master";
import CountdownChamp from "./projects/countdown-champ";
import Header from "./components/Header";
import "./index.css";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
      <Route
        path="/music-master"
        render={() => (
          <Header>
            <MusicMaster />
          </Header>
        )}
      />
      <Route
        path="/countdown-champ"
        render={() => (
          <Header>
            <CountdownChamp />
          </Header>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
